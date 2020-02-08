'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('ExerciseSessions', [{
        exersiceName: 'Exercise Name',
        songURL: '',
        description: 'THis is just a test description to check rather api is working ok or not. THis is just a test description to check rather api is working ok or not. THis is just a test description to check rather api is working ok or not. THis is just a test description to check rather api is working ok or not. THis is just a test description to check rather api is working ok or not. THis is just a test description to check rather api is working ok or not. ',
        pranayamaId: 3
      }], {});
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
