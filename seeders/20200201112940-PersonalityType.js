'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('PersonalityTypes', [
        {
          personality: 'The Sage',
        },
        {
          personality: 'The Innocent',
        },
        {
          personality: 'The Explorer',
        },
        {
          personality: 'The Ruler',
        },
        {
          personality: 'The Creator',
        },
        {
          personality: 'The Hero',
        },
        {
          personality: 'The Rebel',
        },
        {
          personality: 'The Lover',
        },
        {
          personality: 'The Comedian',
        },
        {
          personality: 'The Orphan',
        }
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
