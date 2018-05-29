const Meetups = (sequelize, DataTypes) => {
  var Meetups = sequelize.define(
    "Meetups",
    {
      title: {
        type: DataTypes.STRING
      }
    },
    {
      tableName: "meetup"
    }
  );

  return Meetups;
};

module.exports = Users;
