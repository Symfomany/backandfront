const Meetups = (sequelize, DataTypes) => {
  var Meetups = sequelize.define(
    "Users",
    {
      title: {
        type: DataTypes.STRING,
        notEmpty: true,
        validate: {
          len: {
            args: 3,
            msg: "Name must be atleast 3 characters in length"
          }
        }
      }
    },
    {
      tableName: "users"
    }
  );

  return Users;
};

module.exports = Users;
