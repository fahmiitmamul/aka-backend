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
        INSERT INTO "public"."religions" ("id", "name", "createdAt", "updatedAt") VALUES (2, 'Kristen', '2023-11-05 23:07:27.564+07', '2023-11-05 23:07:27.564+07');
        INSERT INTO "public"."religions" ("id", "name", "createdAt", "updatedAt") VALUES (1, 'Islam', '2023-11-05 23:07:25.196+07', '2023-11-27 11:04:08.218+07');
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
