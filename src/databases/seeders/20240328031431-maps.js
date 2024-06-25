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
           INSERT INTO "public"."maps" ("id", "url", "createdAt", "updatedAt") VALUES (1, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1767.5008798691633!2d106.8778157451984!3d-6.384003178837754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eb0e41239503%3A0x34706d2e323d6163!2sPT%20RADAR%20UTAMA%20NUSANTARA%20LAPAN!5e0!3m2!1sid!2sid!4v1695019682708!5m2!1sid!2sid', '2023-11-05 22:54:43.907+07', '2023-11-05 22:54:43.907+07');
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
