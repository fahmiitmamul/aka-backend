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
        INSERT INTO "public"."roles" ("id", "name", "createdAt", "updatedAt") VALUES (1, 'Administrator', '2023-11-05 22:24:41.779+07', '2023-11-05 22:24:41.779+07');
        INSERT INTO "public"."roles" ("id", "name", "createdAt", "updatedAt") VALUES (2, 'Super Administrator', '2023-11-05 22:24:44.739+07', '2023-11-05 22:24:44.739+07');
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
