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
        INSERT INTO "public"."projects" ("id", "picture", "title", "content", "order", "createdAt", "updatedAt") VALUES (1, 'uploads/1699200317411', 'Construction Site', 'Memungkinkan manajemen proyek yang efisien dengan fitur pelacakan progres, alokasi sumber daya, dan kolaborasi real-time untuk tim konstruksi', 1, '2023-11-05 23:05:20.215+07', '2023-11-05 23:05:20.215+07');
        INSERT INTO "public"."projects" ("id", "picture", "title", "content", "order", "createdAt", "updatedAt") VALUES (2, 'uploads/1699200343994', 'Trading Distribution', 'Menyediakan solusi terintegrasi untuk mengelola rantai pasokan, distribusi produk, dan analisis pasar yang akurat untuk meningkatkan efisiensi operasional.', 2, '2023-11-05 23:05:46.796+07', '2023-11-05 23:05:46.796+07');
        INSERT INTO "public"."projects" ("id", "picture", "title", "content", "order", "createdAt", "updatedAt") VALUES (3, 'uploads/1699200365285', 'Recruitment Management', 'Memfasilitasi proses rekrutmen end-to-end dengan alat pengelolaan kandidat yang canggih, integrasi platform pencarian pekerjaan, dan analisis data untuk penilaian kinerja rekruitmen', 3, '2023-11-05 23:06:07.895+07', '2023-11-05 23:06:07.895+07');
        INSERT INTO "public"."projects" ("id", "picture", "title", "content", "order", "createdAt", "updatedAt") VALUES (4, 'uploads/1699200384383', 'HRIS', 'Platform berbasis cloud yang menyediakan solusi lengkap untuk manajemen data karyawan, administrasi gaji, pelatihan, dan analisis kinerja untuk meningkatkan pengelolaan sumber daya manusia', 4, '2023-11-05 23:06:27.278+07', '2023-11-05 23:06:27.278+07');
        INSERT INTO "public"."projects" ("id", "picture", "title", "content", "order", "createdAt", "updatedAt") VALUES (5, 'uploads/1699200415850', 'Manufacturing', 'Mempercepat proses produksi dan pengawasan kualitas dengan fitur manufaktur otomatis, pelacakan inventaris, dan analisis data produksi real-time untuk mengoptimalkan efisiensi operasional', 5, '2023-11-05 23:06:58.474+07', '2023-11-05 23:06:58.474+07');
        INSERT INTO "public"."projects" ("id", "picture", "title", "content", "order", "createdAt", "updatedAt") VALUES (6, 'uploads/1699200429617', 'Core ERP', 'Menyediakan integrasi lengkap dari berbagai fungsi bisnis termasuk keuangan, produksi, logistik, dan penjualan untuk meningkatkan koordinasi dan visibilitas proses bisnis di seluruh organisasi', 6, '2023-11-05 23:07:11.807+07', '2023-11-05 23:07:11.807+07');
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
