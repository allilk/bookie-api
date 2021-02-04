
// call the packages we need
let express    = require('express');        // call express
let app        = express();                 // define our app using express
let bodyParser = require('body-parser');
let cors = require('cors');
app.use(cors());
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


let port = process.env.PORT || 8080;        // set our port
// API MODELS
let mongoose   = require('mongoose');
const uri = "mongodb+srv://milk:BzDr8m7W6f4HHrZa@cluster0.wcixp.mongodb.net/main?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }); // connect to our database

let RecipeObj     = require('./app/models/recipe');
// ROUTES FOR OUR API
// =============================================================================
let router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
router.route('/recipe')
    // create a recipe (accessed at POST http://localhost:8080/api/recipe)
    .post(function(req, res) {
        let recipe = new RecipeObj();      // create a new instance of the recipe model
        recipe.name = req.body.name;  // set the recipe name (comes from the request)
        // save the recipe and check for errors
        recipe.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'recipe created!' });
        });
    })
    // get all the recipe (accessed at GET http://localhost:8080/api/recipe)
    .get(function(req, res) {
        RecipeObj.find(function(err, recipe) {
            if (err)
                res.send(err);

            res.json(recipe);
        });
    });
router.route('/recipe/:recipe_id')
    // get the recipe with that id (accessed at GET http://localhost:8080/api/recipe/:recipe_id)
    .get(function(req, res) {
        RecipeObj.findById(req.params.recipe_id, function(err, recipe) {
            if (err)
                res.send(err);
            res.json(recipe);
        });
    })
    .put(function(req, res) {

        // use our recipe model to find the recipe we want
        RecipeObj.findById(req.params.recipe_id, function(err, recipe) {

            if (err)
                res.send(err);

            recipe.name = req.body.name;  // update the recipes info
            recipe.video.resolution = req.body.resolution;
            recipe.audio = req.body.audio;
            // save the recipe
            recipe.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'recipe updated!' });
            });

        });
    })
    .delete(function(req, res) {
        RecipeObj.remove({
            _id: req.params.recipe_id
        }, function(err, recipe) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);