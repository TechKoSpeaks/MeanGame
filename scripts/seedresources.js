const db = require("../models");

db.Resource.sequelize
  .sync({ force: true })
  .then(() => {
    return db.Resource.create({ inventory: 1000 });
  })
  // eslint-disable-next-line no-unused-vars
  .then(dbResource => {
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
