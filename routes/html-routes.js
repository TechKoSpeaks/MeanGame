/* eslint-disable no-unused-vars */
const db = require("../models/");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    db.Land.findAll().then(data => {
      const landList = {
        lands: data
      };
    });
    res.render("homepage");
  });

  app.get("/meanscore", (req, res) => {
    // If the user already has an account send them to the members page
    res.render("meanscore");
  });

  app.get("/highscore", (req, res) => {
    // If the user already has an account send them to the members page
    res.render("highscore");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/members", isAuthenticated, (req, res) => {
  //   res.render("members", { email: req.user.email });
  // });
};
