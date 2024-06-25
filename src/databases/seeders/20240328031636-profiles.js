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
       INSERT INTO "public"."profiles" ("id", "picture", "full_name", "phone_number", "gender", "user_id", "createdAt", "updatedAt") VALUES (1, NULL, 'adminadmin', NULL, NULL, 3, '2023-11-24 11:30:08.29+07', '2023-11-24 11:30:08.29+07');
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
