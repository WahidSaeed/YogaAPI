'use strict';
module.exports = (sequelize, DataTypes) => {
  const PersonalityType = sequelize.define('PersonalityType', {
    personality: DataTypes.STRING
  }, {});
  PersonalityType.associate = function(models) {
    // associations can be defined here
  };
  return PersonalityType;
};