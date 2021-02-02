// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {
  app.post("/api/resources", (req, res) => {
    db.Resource.create(req.body).then(dbResource => {
      res.json(dbResource);
    });
  });

  app.get("/api/resources/:id", (req, res) => {
    db.Resource.findOne({
      where: {
        id: req.params.id
      }
    }).then(dbResource => {
      res.json(dbResource);
    });
  });

  app.put("/api/resources/:id", (req, res) => {
    db.Resource.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(dbResource => {
      res.json(dbResource);
    });
  });
};
