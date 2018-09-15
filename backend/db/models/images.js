'use strict';
module.exports = (sequelize, DataTypes) => {
  var images = sequelize.define('images', {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  images.associate = function(models) {
    // associations can be defined here
  };
  return images;
};