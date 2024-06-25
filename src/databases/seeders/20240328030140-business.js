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
        INSERT INTO "public"."businesses" ("id", "picture", "title", "description", "createdAt", "updatedAt") VALUES (1, 'uploads/1701226935308', 'Tiket Pesawat', 'Selamat datang di Arya Kemuning Abadi, sumber tiket pesawat terbaik untuk perjalanan Anda. Dapatkan harga terbaik, pilihan luas, dan kemudahan booking hanya dalam beberapa klik. Jelajahi dunia dengan kenyamanan dan keamanan bersama kami. Pesan tiket pesawat Anda sekarang! .', '2023-11-29 10:02:18.435+07', '2023-11-29 10:02:18.435+07');
        INSERT INTO "public"."businesses" ("id", "picture", "title", "description", "createdAt", "updatedAt") VALUES (2, 'uploads/1701227027846', 'Kontraktor', 'Sebagai kontraktor profesional, fokus utama saya adalah memberikan layanan konstruksi berkualitas tinggi dan solusi yang tepat untuk memenuhi kebutuhan unik klien. Dengan pengalaman yang luas dalam industri ini, saya telah berhasil menyelesaikan berbagai proyek, mulai dari renovasi kecil hingga konstruksi bangunan baru.', '2023-11-29 10:03:50.697+07', '2023-11-29 10:03:50.697+07');
        INSERT INTO "public"."businesses" ("id", "picture", "title", "description", "createdAt", "updatedAt") VALUES (3, 'uploads/1701233844965', 'Outsourcing', 'Outsourcing adalah praktik bisnis di mana suatu perusahaan mengontrak pihak eksternal untuk melaksanakan tugas-tugas atau aktivitas tertentu yang sebelumnya dijalankan oleh departemen atau tim internal perusahaan tersebut. Tujuan utama dari outsourcing adalah untuk meningkatkan efisiensi operasional, mengurangi biaya produksi, dan memungkinkan fokus yang lebih besar pada inti bisnis perusahaan. ', '2023-11-29 11:57:27.335+07', '2023-11-29 21:15:09.673+07');

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
