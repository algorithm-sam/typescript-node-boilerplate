'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};