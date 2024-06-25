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
       INSERT INTO "public"."testimonies" ("id", "picture", "profilephoto", "name", "position_id", "description", "createdAt", "updatedAt") VALUES (2, 'uploads/1699203270601', 'uploads/1699203269119', 'Laura', 1, 'Kami telah menggunakan solusi keamanan dari perusahaan ini dan kami sangat puas dengan hasilnya', '2023-11-05 23:54:35.858+07', '2023-11-05 23:54:35.858+07');
        INSERT INTO "public"."testimonies" ("id", "picture", "profilephoto", "name", "position_id", "description", "createdAt", "updatedAt") VALUES (3, 'uploads/1699203315692', 'uploads/1699203314135', 'John', 1, 'Kami telah menggunakan solusi keamanan dari perusahaan ini dan kami sangat puas dengan hasilnya', '2023-11-05 23:55:22.095+07', '2023-11-05 23:55:22.095+07');
        INSERT INTO "public"."testimonies" ("id", "picture", "profilephoto", "name", "position_id", "description", "createdAt", "updatedAt") VALUES (4, 'uploads/1699203356360', 'uploads/1699203355857', 'Fajar', 1, 'Kami telah menggunakan solusi keamanan dari perusahaan ini dan kami sangat puas dengan hasilnya', '2023-11-05 23:55:59.468+07', '2023-11-05 23:55:59.468+07');
        INSERT INTO "public"."testimonies" ("id", "picture", "profilephoto", "name", "position_id", "description", "createdAt", "updatedAt") VALUES (5, 'uploads/1701052526445', 'uploads/1701052526446', 'Nadhira Fauzi', 3, 'Kami telah menggunakan solusi keamanan dari perusahaan ini dan kami sangat puas dengan hasilnya', '2023-11-27 09:35:30.927+07', '2023-11-27 09:35:30.927+07');
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
