// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {
    // Add a new land
    app.post("/api/player", (req, res) => {
        db.Player.create(req.body).then((dbPlayers) => {
            res.json(dbPlayers);
        });
    });

    // Get all lands
    app.get("/api/", (req, res) => {
        db.Player.findAll({
        }).then((dbPlayers) => {
            res.json(dbPlayers);
        });
    });

    // Route for updating land data
    app.put("/api/player/:id", (req, res) => {
        db.Player.update(req.body,
            {
                where: {
                    id: req.params.id
                }
            }).then((dbPlayers) => {
                res.json(dbPlayers)
            })
    });
};
