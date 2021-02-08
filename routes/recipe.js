module.exports = function(app) {
    let recipeHandlers = require('../controllers/recipe.js');
    let userHandlers = require('../controllers/user.js');
    app.route('/api/recipe')
        .get(recipeHandlers.get_all);
    app.route('/api/recipe/get')
        .post(recipeHandlers.get);
    app.route('/api/recipe/new')
        .post(userHandlers.loginRequired, recipeHandlers.new);
    app.route('/api/recipe/update')
        .put(userHandlers.loginRequired, recipeHandlers.update)
}