'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubscriptionType = sequelize.define('SubscriptionType', {
    subscription: DataTypes.STRING,
    parentId: DataTypes.INTEGER
  }, {});
  SubscriptionType.associate = function(models) {
    // associations can be defined here
  };
  return SubscriptionType;
};