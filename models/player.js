// 1. ID - INT
// 2. Name - VARCHAR
// 3. Resource Cost - INT
// 4. Owned by - INT ID

module.exports = function(sequelize, DataTypes) {
  const Player = sequelize.define("Player", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // eslint-disable-next-line camelcase
    resource_inventory: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    highscore: {
      type: DataTypes.INTEGER
    }
  });

  // Post.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Post.belongsTo(models.Author, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Player;
};
