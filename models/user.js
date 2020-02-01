'use strict';
var notificationType = require('./notificationtype');
var subscriptionType = require('./subscriptiontype');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: false
    },
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    notification_Id: DataTypes.INTEGER,
    subscription_Id: DataTypes.INTEGER
  }, {});

  return User;
};