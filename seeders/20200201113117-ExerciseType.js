'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('ExerciseTypes', [
        {
          exercise: 'Mind'
        },
        {
          exercise: 'Body'
        },
        {
          exercise: 'Emotions'
        },
        {
          exercise: 'Ethric Body'
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
