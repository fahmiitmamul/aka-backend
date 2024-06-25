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
        INSERT INTO "public"."vaccines" ("id", "name", "createdAt", "updatedAt") VALUES (1, 'Pertama (I)', '2023-11-05 23:32:48.934+07', '2023-11-05 23:32:48.934+07');
        INSERT INTO "public"."vaccines" ("id", "name", "createdAt", "updatedAt") VALUES (2, 'Kedua (II)', '2023-11-05 23:32:53.778+07', '2023-11-05 23:32:53.778+07');
        INSERT INTO "public"."vaccines" ("id", "name", "createdAt", "updatedAt") VALUES (3, 'Ketiga (III)', '2023-11-05 23:32:59.286+07', '2023-11-05 23:32:59.286+07');
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
