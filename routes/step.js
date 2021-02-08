module.exports = function(app) {
    let stepHandlers = require('../controllers/step.js');
    let userHandlers = require('../controllers/user.js');
    // todoList Routes
    app.route('/step')
        .get(stepHandlers.get);
    app.route('/step/new')
        .post(userHandlers.loginRequired, stepHandlers.new);
    app.route('/step/update')
        .put(userHandlers.loginRequired, stepHandlers.update)
}