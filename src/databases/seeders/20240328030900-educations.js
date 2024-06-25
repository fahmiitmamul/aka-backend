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
        INSERT INTO "public"."education_lists" ("id", "name", "createdAt", "updatedAt") VALUES (4, 'S1', '2023-11-05 22:43:57.208+07', '2023-11-05 22:43:57.208+07');
        INSERT INTO "public"."education_lists" ("id", "name", "createdAt", "updatedAt") VALUES (5, 'S2', '2023-11-05 22:43:58.586+07', '2023-11-05 22:43:58.586+07');
        INSERT INTO "public"."education_lists" ("id", "name", "createdAt", "updatedAt") VALUES (6, 'S3', '2023-11-05 22:43:59.857+07', '2023-11-05 22:43:59.857+07');
        INSERT INTO "public"."education_lists" ("id", "name", "createdAt", "updatedAt") VALUES (1, 'SD/MI', '2023-11-05 22:43:51.338+07', '2023-11-05 22:43:51.338+07');
        INSERT INTO "public"."education_lists" ("id", "name", "createdAt", "updatedAt") VALUES (2, 'SMP/MTS', '2023-11-05 22:43:53.643+07', '2023-11-05 22:43:53.643+07');
        INSERT INTO "public"."education_lists" ("id", "name", "createdAt", "updatedAt") VALUES (3, 'SMA/SMK/MAN', '2023-11-05 22:43:55.878+07', '2023-11-05 22:43:55.878+07');
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
