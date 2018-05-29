const Meetups = (sequelize, DataTypes) => {
  var Meetups = sequelize.define(
    "Meetups",
    {
      title: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.TEXT
      },
      url: {
        type: DataTypes.STRING
      },
      cover: {
        type: DataTypes.BOOLEAN
      }
    },
    {
      tableName: "meetup"
    }
  );

  return Meetups;
};

module.exports = Meetups;
