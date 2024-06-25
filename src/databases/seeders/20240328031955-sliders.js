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
        INSERT INTO "public"."sliders" ("id", "picture", "title", "content", "url", "order", "createdAt", "updatedAt") VALUES (1, 'uploads/1699201343445', 'Parking', 'Sistem parkir canggih yang mengoptimalkan ruang parkir dan meningkatkan pengalaman pelanggan.', 'http://localhost:3000', 1, '2023-11-05 23:22:28.441+07', '2023-11-05 23:22:28.441+07');
        INSERT INTO "public"."sliders" ("id", "picture", "title", "content", "url", "order", "createdAt", "updatedAt") VALUES (2, 'uploads/1699201613095', 'Security', 'Menawarkan sistem keamanan terintegrasi yang canggih untuk melindungi aset berharga klien. Tim keamanan kami yang berpengalaman menawarkan perlindungan yang komprehensif', 'http://localhost:3000', 2, '2023-11-05 23:26:57.158+07', '2023-11-05 23:26:57.158+07');
        INSERT INTO "public"."sliders" ("id", "picture", "title", "content", "url", "order", "createdAt", "updatedAt") VALUES (3, 'uploads/1699201713751', 'IT Solution', 'Memberikan solusi teknologi informasi yang inovatif dan dapat disesuaikan, membantu klien mengoptimalkan operasi mereka. Dari pengembangan perangkat lunak khusus hingga manajemen infrastruktur TI yang efisien', 'http://localhost:3000', 3, '2023-11-05 23:28:38.534+07', '2023-11-05 23:28:38.534+07');

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
