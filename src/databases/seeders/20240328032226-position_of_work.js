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
        INSERT INTO "public"."position_of_works" ("id", "name", "createdAt", "updatedAt") VALUES (1, 'Technician', '2023-11-05 23:07:15.149+07', '2023-11-05 23:07:15.149+07');
        INSERT INTO "public"."position_of_works" ("id", "name", "createdAt", "updatedAt") VALUES (2, 'Programmer', '2023-11-05 23:07:18.94+07', '2023-11-05 23:07:18.94+07');
        INSERT INTO "public"."position_of_works" ("id", "name", "createdAt", "updatedAt") VALUES (3, 'Store Crew', '2023-11-06 00:07:22.381+07', '2023-11-06 00:07:22.381+07');
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
