'use strict';
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
    notificationId: DataTypes.INTEGER,
    subscriptionId: DataTypes.INTEGER
  }, {});

  User.associate = function(models) {
    User.belongsTo(models.NotificationType);
    User.belongsTo(models.SubscriptionType);
  };

  return User;
};