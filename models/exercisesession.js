'use strict';
module.exports = (sequelize, DataTypes) => {
  const ExerciseSession = sequelize.define('ExerciseSession', {
    id: {
      allowNull: false,
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: false
    },
    exersiceName: DataTypes.STRING,
    songURL: DataTypes.STRING,
    description: DataTypes.STRING,
    pranayamaId: DataTypes.INTEGER
  }, {});
  ExerciseSession.associate = function(models) {
    //ExerciseSession.hasMany(models.Pranayama, { foreignKey: 'pranayamaId', sourceKey: 'pranayamaId' })
    //ExerciseSession.belongsTo(models.DeviceInstruction, { foreignKey: 'id', targetKey: 'exerciseSessionId' })
    ExerciseSession.hasMany(models.DeviceInstruction)
  };
  return ExerciseSession;
};