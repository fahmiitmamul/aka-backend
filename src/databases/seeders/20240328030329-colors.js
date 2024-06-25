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
           INSERT INTO "public"."colors" ("id", "primary", "secondary", "text", "createdAt", "updatedAt") VALUES (1, '#0d1034', '#000000', '#ffffff', '2023-11-24 16:35:26.29+07', '2023-11-24 17:24:25.112+07');
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
