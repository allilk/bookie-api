module.exports = function(app) {
    let measureHandlers = require('../controllers/measurement.js');
    let userHandlers = require('../controllers/user.js');
    // todoList Routes
    app.route('/measurement')
        .get(measureHandlers.get);
    app.route('/measurement/new')
        .post(userHandlers.loginRequired, measureHandlers.new);
    app.route('/measurement/update')
        .put(userHandlers.loginRequired, measureHandlers.update)
}