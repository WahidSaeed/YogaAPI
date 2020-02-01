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
    instructionId: DataTypes.INTEGER
  }, {});
  ExerciseSession.associate = function(models) {
    // associations can be defined here
  };
  return ExerciseSession;
};