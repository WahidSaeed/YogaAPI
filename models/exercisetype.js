'use strict';
module.exports = (sequelize, DataTypes) => {
  const ExerciseType = sequelize.define('ExerciseType', {
    exercise: DataTypes.STRING
  }, {});
  ExerciseType.associate = function(models) {
    // associations can be defined here
  };
  return ExerciseType;
};