const Meetups = (sequelize, DataTypes) => {
  var Meetups = sequelize.define(
    "Meetups",
    {
      title: {
        type: DataTypes.STRING
      }
    },
    {
      description: {
        type: DataTypes.STRING
      }
    },
    {
      tableName: "meetups"
    }
  );

  return Meetups;
};

module.exports = Meetups;
