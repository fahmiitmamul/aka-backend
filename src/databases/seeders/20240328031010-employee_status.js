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
        INSERT INTO "public"."employee_statuses" ("id", "name", "createdAt", "updatedAt") VALUES (1, 'Karyawan Kontrak', '2023-11-05 22:44:17.18+07', '2023-11-05 22:44:17.18+07');
        INSERT INTO "public"."employee_statuses" ("id", "name", "createdAt", "updatedAt") VALUES (2, 'Karyawan Tetap', '2023-11-05 22:44:19.817+07', '2023-11-05 22:44:19.817+07');
        INSERT INTO "public"."employee_statuses" ("id", "name", "createdAt", "updatedAt") VALUES (4, 'Karyawan Magang', '2024-01-06 00:41:09.91+07', '2024-01-06 00:41:09.91+07');
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
