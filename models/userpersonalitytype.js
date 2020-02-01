'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserPersonalityType = sequelize.define('UserPersonalityType', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user: DataTypes.STRING,
    personalityId: DataTypes.INTEGER
  }, {});
  
  return UserPersonalityType;
};