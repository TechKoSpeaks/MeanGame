// 1. ID - INT
// 2. Name - VARCHAR
// 3. Resource Cost - INT
// 4. Owned by - INT ID

module.exports = function(sequelize, DataTypes) {
  const Resource = sequelize.define("Resource", {
    inventory: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
    // eslint-disable-next-line camelcase
  });
  return Resource;
};
