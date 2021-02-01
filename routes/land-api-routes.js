// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function (app) {
  // Add a new land
  app.post("/api/lands", (req, res) => {
    db.Land.create(req.body).then(dbLands => {
      res.json(dbLands);
    });
  });

  // Get all lands
  app.get("/api/lands", (req, res) => {
    db.Land.findAll({}).then(dbLands => {
      res.json(dbLands);
    });
  });

  // Route for updating land data
  app.put("/api/lands/:id", (req, res) => {
    db.Land.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(dbLands => {
      res.json(dbLands);
    });
  });
};
