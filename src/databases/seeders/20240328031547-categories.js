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
        INSERT INTO "public"."categories" ("id", "title", "createdAt", "updatedAt") VALUES (1, 'Kesehatan', '2023-11-05 22:38:17.331+07', '2023-11-05 22:38:17.331+07');
        INSERT INTO "public"."categories" ("id", "title", "createdAt", "updatedAt") VALUES (2, 'Teknologi', '2023-11-05 22:38:25.948+07', '2023-11-05 22:38:25.948+07');
        INSERT INTO "public"."categories" ("id", "title", "createdAt", "updatedAt") VALUES (3, 'Politik', '2023-11-05 22:38:28.748+07', '2023-11-05 22:38:28.748+07');
        INSERT INTO "public"."categories" ("id", "title", "createdAt", "updatedAt") VALUES (4, 'Pendidikan', '2023-11-05 22:38:40.065+07', '2023-11-05 22:38:40.065+07');
        INSERT INTO "public"."categories" ("id", "title", "createdAt", "updatedAt") VALUES (5, 'Hiburan', '2023-11-05 22:38:44.142+07', '2023-11-05 22:38:44.142+07');
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
