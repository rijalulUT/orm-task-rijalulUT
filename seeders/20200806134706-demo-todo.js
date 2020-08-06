'use strict';
var faker = require('faker');
module.exports = {
  up: async (queryInterface, Sequelize) => {
   const bulk = Array(2000)
    .fill()
    .map((list) =>({
        item: faker.hacker.phrase(),
        createdAt: new Date(),
        updatedAt: new Date()
      }))
    await queryInterface.bulkInsert('Todos',bulk, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
