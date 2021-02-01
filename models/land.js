// 1. ID - INT
// 2. Name - VARCHAR
// 3. Resource Cost - INT
// 4. Owned by - INT ID

module.exports = function(sequelize, DataTypes) {
  const Land = sequelize.define("Land", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // eslint-disable-next-line camelcase
    resource_cost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // eslint-disable-next-line camelcase
    is_owned: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    // eslint-disable-next-line camelcase
    owned_by: {
      type: DataTypes.INTEGER,
      allowNull: true
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

  return Land;
};
