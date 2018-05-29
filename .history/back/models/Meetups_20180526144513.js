const Meetups = (sequelize, DataTypes) => {
  var Meetups = sequelize.define(
    "Users",
    {
      title: {
        type: DataTypes.STRING
      }
    },
    {
      tableName: "users"
    }
  );

  return Users;
};

module.exports = Users;
