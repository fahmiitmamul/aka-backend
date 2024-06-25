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
        INSERT INTO "public"."teams" ("id", "picture", "name", "departement_id", "position_id", "createdAt", "updatedAt") VALUES (3, 'uploads/1699203418864', 'Laura', 5, 2, '2023-11-05 23:57:05.584+07', '2023-11-06 12:15:27.448+07');
        INSERT INTO "public"."teams" ("id", "picture", "name", "departement_id", "position_id", "createdAt", "updatedAt") VALUES (2, 'uploads/1699203395852', 'Fajar', 4, 2, '2023-11-05 23:56:44.217+07', '2023-11-28 10:06:30.434+07');
        INSERT INTO "public"."teams" ("id", "picture", "name", "departement_id", "position_id", "createdAt", "updatedAt") VALUES (4, 'uploads/1701139562497', 'Fahmi', 2, 3, '2023-11-05 23:57:41.604+07', '2023-11-28 10:23:50.507+07');
        INSERT INTO "public"."teams" ("id", "picture", "name", "departement_id", "position_id", "createdAt", "updatedAt") VALUES (1, 'uploads/1699203380334', 'John', 3, 2, '2023-11-05 23:56:24.343+07', '2024-01-06 01:02:17.341+07');
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
