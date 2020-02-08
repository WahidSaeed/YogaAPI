'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ExerciseSessions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      exersiceName: {
        type: Sequelize.STRING
      },
      songURL: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      pranayamaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'pranayamas',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ExerciseSessions');
  }
};