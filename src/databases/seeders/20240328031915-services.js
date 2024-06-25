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
        INSERT INTO "public"."services" ("id", "picture", "title", "content", "order", "createdAt", "updatedAt") VALUES (1, 'uploads/1699201052214', 'Parking', 'Menyediakan solusi parkir modern dan efisien untuk memastikan pengalaman parkir yang nyaman bagi klien. Dengan teknologi canggih, kami memastikan keamanan kendaraan dan kemudahan akses parkir yang cepat', 1, '2023-11-05 23:17:36.392+07', '2023-11-05 23:17:36.392+07');
        INSERT INTO "public"."services" ("id", "picture", "title", "content", "order", "createdAt", "updatedAt") VALUES (2, 'uploads/1699201193334', 'Security', 'Menawarkan sistem keamanan terintegrasi yang canggih untuk melindungi aset berharga klien. Tim keamanan kami yang berpengalaman menawarkan perlindungan yang komprehensif', 2, '2023-11-05 23:19:57.936+07', '2023-11-05 23:19:57.936+07');
        INSERT INTO "public"."services" ("id", "picture", "title", "content", "order", "createdAt", "updatedAt") VALUES (3, 'uploads/1699201270873', 'IT Solution', 'Memberikan solusi teknologi informasi yang inovatif dan dapat disesuaikan, membantu klien mengoptimalkan operasi mereka. Dari pengembangan perangkat lunak khusus hingga manajemen infrastruktur TI yang efisien', 3, '2023-11-05 23:21:14.178+07', '2023-11-05 23:21:14.178+07');
        INSERT INTO "public"."services" ("id", "picture", "title", "content", "order", "createdAt", "updatedAt") VALUES (4, 'uploads/1699682112415', 'Online Travel Agent', 'Melalui platform digital kami, pelanggan dapat dengan mudah mencari, memesan, dan mengelola perjalanan mereka dengan cara yang efisien dan praktis. OTA kami menyediakan akses langsung ke berbagai opsi akomodasi', 4, '2023-11-11 12:55:16.809+07', '2023-11-11 12:55:16.809+07');
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
