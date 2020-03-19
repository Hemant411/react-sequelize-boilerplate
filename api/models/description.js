'use strict';
module.exports = (sequelize, DataTypes) => {
  const description = sequelize.define('description', {
    field_1: DataTypes.STRING,
    field_2: DataTypes.STRING,
    field_3: DataTypes.STRING,
    field_4: DataTypes.STRING,
    field_5: DataTypes.STRING,
    field_6: DataTypes.STRING,
    field_7: DataTypes.STRING,
    field_8: DataTypes.STRING
  }, {});
  description.associate = function(models) {
    // associations can be defined here
  };
  return description;
};