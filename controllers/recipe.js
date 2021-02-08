let mongoose = require('mongoose'),
  Recipe = mongoose.model('Recipe');

exports.new = function(req, res) {
    req.body.created_by = req.user._id;
    let newRecipe = new Recipe(req.body);
    newRecipe.save(function(err, recipe) {
      if (err) {
        return res.status(400).send({
          message: err
        });
      } else {
            return res.json(recipe);
      }
    });
  };
exports.get = function(req, res) {
    Recipe.findOne({
        _id: req.body._id
    }, function(err, recipe) {
        if (err) {
            return res.status(400).send({
              message: err
            });
          } else {
            return res.json(recipe);
          }
    });
};
exports.update = function(req, res) {
    Recipe.findById(req.body._id, function(err, recipe) {
        recipe.title = req.body.title || recipe.title;
        recipe.updated_last = Date.now();
        recipe.updated_by = req.user._id;
        recipe.save(function(err, response) {
            if (err) {
                return res.status(400).send({
                    message: err
                });
            } else {
                return res.json(response);
            }
        });

    });
}