const db = require("../models");
const lands = require("./lands.json");

db.sequelize
  .sync({ force: false })
  .then(() => {
    return db.Land.bulkCreate(lands);
  })
  .then(dbLands => {
    console.log(`Inserted ${dbLands.length} records`);
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
