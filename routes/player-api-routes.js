// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {
  app.post("/api/players", (req, res) => {
    db.Player.create(req.body).then(dbPlayers => {
      res.json(dbPlayers);
    });
  });

  app.get("/api/players", (req, res) => {
    db.Player.findAll({}).then(dbPlayers => {
      res.json(dbPlayers);
    });
  });

  app.put("/api/players/:id", (req, res) => {
    db.Player.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(dbPlayers => {
      res.json(dbPlayers);
    });
  });
};
