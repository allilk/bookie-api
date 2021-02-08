module.exports = function(app) {
    let ingredientHandlers = require('../controllers/ingredient.js');
    let userHandlers = require('../controllers/user.js');
    // todoList Routes
    app.route('/ingredient')
        .get(ingredientHandlers.get);
    app.route('/ingredient/new')
        .post(userHandlers.loginRequired, ingredientHandlers.new);
    app.route('/ingredient/update')
        .put(userHandlers.loginRequired, ingredientHandlers.update)
}