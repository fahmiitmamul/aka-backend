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
        INSERT INTO "public"."sub_menus" ("id", "menu", "url", "target", "order", "menu_id", "createdAt", "updatedAt") VALUES (2, 'Organisasi', 'https://aka.itmamulfahmi.my.id', '_blank', 1, 2, '2023-11-06 00:09:21.257+07', '2024-01-08 10:39:45.541+07');
        INSERT INTO "public"."sub_menus" ("id", "menu", "url", "target", "order", "menu_id", "createdAt", "updatedAt") VALUES (3, 'Visi Misi', 'https://aka.itmamulfahmi.my.id/#visi-misi', '_blank', 1, 2, '2023-11-08 09:45:38.876+07', '2024-01-08 10:40:05.92+07');

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
