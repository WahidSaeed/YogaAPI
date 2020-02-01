'use strict';
module.exports = (sequelize, DataTypes) => {
  const DeviceInstruction = sequelize.define('DeviceInstruction', {
    nostrilSide: DataTypes.INTEGER,
    seconds: DataTypes.INTEGER
  }, {});
  DeviceInstruction.associate = function(models) {
    // associations can be defined here
  };
  return DeviceInstruction;
};