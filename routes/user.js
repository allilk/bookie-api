module.exports = function (app) {
  let userHandlers = require("../controllers/user.js");
  app
    .route("/api/profile")
    .post(userHandlers.loginRequired, userHandlers.profile);
  app
    .route("/api/profile/get")
    .post(userHandlers.profile_get);
  app.route("/api/auth/register").post(userHandlers.register);
  app.route("/api/auth/login").post(userHandlers.sign_in);
};
