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
        INSERT INTO "public"."client_pictures" ("id", "picture", "title", "content", "order", "createdAt", "updatedAt") VALUES (1, 'uploads/1699198764316', 'Mekari', 'Mekari', 1, '2023-11-05 22:39:26.249+07', '2023-11-05 22:39:26.249+07');
        INSERT INTO "public"."client_pictures" ("id", "picture", "title", "content", "order", "createdAt", "updatedAt") VALUES (2, 'uploads/1699198775886', 'Hana Bank', 'Hana Bank', 2, '2023-11-05 22:39:38.364+07', '2023-11-05 22:39:38.364+07');
        INSERT INTO "public"."client_pictures" ("id", "picture", "title", "content", "order", "createdAt", "updatedAt") VALUES (3, 'uploads/1699198788703', 'BRI', 'BRI', 3, '2023-11-05 22:39:50.382+07', '2023-11-05 22:39:50.382+07');
        INSERT INTO "public"."client_pictures" ("id", "picture", "title", "content", "order", "createdAt", "updatedAt") VALUES (4, 'uploads/1699198799521', 'Detik', 'Detik', 4, '2023-11-05 22:40:02.295+07', '2023-11-05 22:40:02.295+07');
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
