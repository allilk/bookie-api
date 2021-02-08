
module.exports = function(app) {
    let userHandlers = require('../controllers/user.js');
    // todoList Routes
    app.route('/api/profile')
        .post(userHandlers.loginRequired, userHandlers.profile);
    app.route('/api/auth/register')
        .post(userHandlers.register);
    app.route('/api/auth/sign_in')
        .post(userHandlers.sign_in);
};