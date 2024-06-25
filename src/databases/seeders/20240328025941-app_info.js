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
        await queryInterface.sequelize.query(
            `
            INSERT INTO "public"."application_infos" ("id", "name", "description", "phone", "email", "address", "logo", "logo_width", "logo_height", "icon", "createdAt", "updatedAt") VALUES (1, 'AK', 'Parking | Security | IT Solution', '08123456789', 'testing@runlapan.com', 'Cimanggis, Depok', 'uploads/1699198188504', '110', '110', 'uploads/1699198189037', '2023-11-05 22:29:51.178+07', '2024-01-20 21:36:12.319+07');
            `
        )
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
