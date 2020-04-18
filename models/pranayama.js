'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pranayama = sequelize.define('Pranayama', {
    id: {
      allowNull: false,
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: false
    },
    pranayamaName: DataTypes.STRING,
    subscriptionLevel: DataTypes.INTEGER,
    parentId: DataTypes.INTEGER
  }, {});
  Pranayama.associate = function(models) {
    Pranayama.hasMany(models.Pranayama)
  };
  return Pranayama;
};