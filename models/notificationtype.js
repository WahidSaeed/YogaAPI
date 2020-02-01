'use strict';
var User = require('./user');

module.exports = (sequelize, DataTypes) => {
  const NotificationType = sequelize.define('NotificationType', {
    notification: DataTypes.STRING
  }, {});
  NotificationType.associate = function(models) {
    // associations can be defined here
  };
  return NotificationType;
};