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
        INSERT INTO "public"."departements" ("id", "name", "createdAt", "updatedAt") VALUES (1, 'Human Resource', '2023-11-05 22:40:46.275+07', '2023-11-05 22:40:46.275+07');
        INSERT INTO "public"."departements" ("id", "name", "createdAt", "updatedAt") VALUES (2, 'Information Technology', '2023-11-05 22:40:53.532+07', '2023-11-05 22:40:53.532+07');
        INSERT INTO "public"."departements" ("id", "name", "createdAt", "updatedAt") VALUES (3, 'Finance', '2023-11-05 22:41:20.039+07', '2023-11-05 22:41:20.039+07');
        INSERT INTO "public"."departements" ("id", "name", "createdAt", "updatedAt") VALUES (4, 'Warehouse', '2023-11-05 22:42:57.518+07', '2023-11-05 22:42:57.518+07');
        INSERT INTO "public"."departements" ("id", "name", "createdAt", "updatedAt") VALUES (5, 'General Affairs', '2023-11-05 22:43:07.144+07', '2023-11-05 22:43:07.144+07');

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
