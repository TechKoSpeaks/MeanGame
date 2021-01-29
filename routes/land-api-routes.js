// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {
  // Add a new land
  app.post("/api/land", (req, res) => {
    db.Land.create(req.body).then((dbLands) => {
      res.json(dbLands);
    });
  });

  // Get all lands
  app.get("/api/", (req, res) => {
    db.Land.findAll({
    }).then((dbLands) => {
      res.json(dbLands);
    });
  });

  // Route for updating land data
  app.put("/api/land/:id", (req, res) => {
    db.Land.update(req.body,
      {
        where: {
          id: req.params.id
        }
      }).then((dbLands) => {
        res.json(dbLands)
      })
  });
};
