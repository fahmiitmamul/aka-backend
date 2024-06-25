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
        INSERT INTO "public"."genders" ("id", "name", "createdAt", "updatedAt") VALUES (1, 'Laki - Laki', '2023-11-05 22:54:34.873+07', '2023-11-27 11:03:54.386+07');
        INSERT INTO "public"."genders" ("id", "name", "createdAt", "updatedAt") VALUES (2, 'Perempuan', '2023-11-05 22:54:38.178+07', '2023-11-27 11:03:57.747+07');
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
