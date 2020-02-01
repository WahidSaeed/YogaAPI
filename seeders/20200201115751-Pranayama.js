'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('pranayamas', [{
        pranayamaName: 'State of Mind Wanted'
      },
      {
        pranayamaName: 'Course Offered'
      },
      {
        pranayamaName: 'Relax',
        parentId: 1
      },
      {
        pranayamaName: 'Get Firery',
        parentId: 1
      },
      {
        pranayamaName: 'Find Balance',
        parentId: 1
      },
      {
        pranayamaName: 'Build Resource',
        parentId: 1
      },
      {
        pranayamaName: '21 Day Modi Shodhana',
        parentId: 2
      },
      {
        pranayamaName: '40 Day 3 Minutes',
        parentId: 2
      },
      {
        pranayamaName: '4 Day 7 Minutes',
        parentId: 2
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
