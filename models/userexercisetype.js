'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserExerciseType = sequelize.define('UserExerciseType', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user: DataTypes.STRING,
    exerciseId: DataTypes.INTEGER
  }, {});
  
  return UserExerciseType;
};