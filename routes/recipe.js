module.exports = function(app) {
    let recipeHandlers = require('../controllers/recipe.js');
    let userHandlers = require('../controllers/user.js');
    // todoList Routes
    app.route('/recipe')
        .get(recipeHandlers.get);
    app.route('/recipe/new')
        .post(userHandlers.loginRequired, recipeHandlers.new);
    app.route('/recipe/update')
        .put(userHandlers.loginRequired, recipeHandlers.update)
}