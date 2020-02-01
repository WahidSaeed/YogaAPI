'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('subscriptiontypes', [
        {
          subscription: 'Beginner',
        },
        {
          subscription: 'Intermediate',
          parentID: 1
        },
        {
          subscription: 'Advance',
          parentID: 2
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
