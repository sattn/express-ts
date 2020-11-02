'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      id: 1,
      name: 'Satou',
      age: 20,
      createdAt: '2020-11-02 18:30:00',
      updatedAt: '2020-11-02 18:30:00'
    },{
      id: 2,
      name: 'Suzuki',
      age: 25,
      createdAt: '2020-11-02 18:30:00',
      updatedAt: '2020-11-02 18:30:00'
    },{
      id: 3,
      name: 'Tanaka',
      age: 30,
      createdAt: '2020-11-02 18:30:00',
      updatedAt: '2020-11-02 18:30:00'
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', {id: {[Op.in]: [1, 2, 3]}}, {});
  }
};
