const Meetups = (sequelize, DataTypes) => {
  var Meetups = sequelize.define(
    "Meetups",
    {
      title: {
        type: DataTypes.STRING
      },
      modalite: {
        type: DataTypes.STRING
      },
      lieux: {
        type: DataTypes.STRING
      },
      date_begin: {
        type: DataTypes.DATE
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
