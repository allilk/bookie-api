
module.exports = function(app) {
    let userHandlers = require('../controllers/user.js');
    // todoList Routes
    app.route('/profile')
        .post(userHandlers.loginRequired, userHandlers.profile);
    app.route('/auth/register')
        .post(userHandlers.register);
    app.route('/auth/sign_in')
        .post(userHandlers.sign_in);
};