'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    contact_no: DataTypes.INTEGER,
    user_role_id: DataTypes.INTEGER,
    email_verified: DataTypes.BOOLEAN,
    email_verification_code: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};