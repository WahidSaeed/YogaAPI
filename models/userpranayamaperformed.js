'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserPranayamaPerformed = sequelize.define('UserPranayamaPerformed', {
    userId: DataTypes.INTEGER,
    pranayamaId: DataTypes.INTEGER
  }, {});
  UserPranayamaPerformed.associate = function(models) {
    // associations can be defined here
  };
  return UserPranayamaPerformed;
};