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
        INSERT INTO "public"."marital_statuses" ("id", "name", "createdAt", "updatedAt") VALUES (1, 'Belum Menikah', '2023-11-05 22:54:48.216+07', '2023-11-05 22:54:48.216+07');
        INSERT INTO "public"."marital_statuses" ("id", "name", "createdAt", "updatedAt") VALUES (2, 'Menikah', '2023-11-05 22:54:52.011+07', '2023-11-05 22:54:52.011+07');
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
