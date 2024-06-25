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
        INSERT INTO "public"."vehicle_type_lists" ("id", "name", "createdAt", "updatedAt") VALUES (1, 'Motor', '2023-11-08 13:38:13.288+07', '2023-11-08 13:38:13.288+07');
        INSERT INTO "public"."vehicle_type_lists" ("id", "name", "createdAt", "updatedAt") VALUES (2, 'Mobil', '2023-11-08 13:38:16.541+07', '2023-11-08 13:38:16.541+07');
   
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
