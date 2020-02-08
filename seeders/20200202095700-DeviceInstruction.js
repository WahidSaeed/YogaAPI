'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('DeviceInstructions', [
        {
          nostrilSide: 1,
          seconds: 3,
          exerciseSessionId: 1
        },
        {
          nostrilSide: 2,
          seconds: 3,
          exerciseSessionId: 1
        },
        {
          nostrilSide: 3,
          seconds: 4,
          exerciseSessionId: 1
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
