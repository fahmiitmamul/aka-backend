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
        INSERT INTO "public"."work_experiences" ("id", "name", "createdAt", "updatedAt") VALUES (1, 'Tidak', '2023-11-05 23:33:31.151+07', '2023-11-05 23:33:31.151+07');
        INSERT INTO "public"."work_experiences" ("id", "name", "createdAt", "updatedAt") VALUES (2, 'Ya', '2023-11-05 23:33:32.956+07', '2023-11-05 23:33:32.956+07');
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
