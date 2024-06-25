'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.sequelize.query(`
        INSERT INTO "public"."statuses" ("id", "name", "createdAt", "updatedAt") VALUES (1, 'Pending', '2023-11-05 23:21:20.831+07', '2023-11-05 23:21:20.831+07');
        INSERT INTO "public"."statuses" ("id", "name", "createdAt", "updatedAt") VALUES (2, 'Approval', '2023-11-05 23:21:26.781+07', '2023-11-05 23:21:26.781+07');
   `)
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
}
