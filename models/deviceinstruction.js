'use strict';
module.exports = (sequelize, DataTypes) => {
  const DeviceInstruction = sequelize.define('DeviceInstruction', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nostrilSide: DataTypes.INTEGER,
    seconds: DataTypes.INTEGER,
    exerciseSessionId: DataTypes.INTEGER
  }, {});
  DeviceInstruction.associate = function(models) {
    //DeviceInstruction.hasMany(models.ExerciseSession, { foreignKey: 'id', sourceKey: 'exerciseSessionId' })
    //DeviceInstruction.belongsToMany(models.ExerciseSession, { through: models.ExerciseSession })
    DeviceInstruction.belongsTo(models.ExerciseSession)
  };
  return DeviceInstruction;
};