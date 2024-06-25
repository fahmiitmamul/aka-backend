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
        INSERT INTO "public"."faqs" ("id", "title", "description", "createdAt", "updatedAt") VALUES (2, 'Bagaimana Anda memastikan keamanan data sensitif dan informasi kami?', 'Kami mengutamakan keamanan data dan kerahasiaan dengan menerapkan protokol keamanan yang kuat, metode enkripsi, dan kontrol akses. Tim kami dilatih tentang praktik terbaik penanganan data dan menandatangani perjanjian kerahasiaan yang ketat.
        ', '2023-11-05 22:49:25.57+07', '2023-11-05 22:49:25.57+07');
        INSERT INTO "public"."faqs" ("id", "title", "description", "createdAt", "updatedAt") VALUES (3, 'Bagaimana proses pemilihan dan pelatihan staf Anda untuk memenuhi persyaratan khusus kami?', 'Staf kami menjalani proses seleksi yang ketat berdasarkan kemampuan mereka, pengalaman, dan adaptabilitas. Kami menyediakan program pelatihan komprehensif yang disesuaikan dengan persyaratan khusus dari setiap proyek.
        ', '2023-11-05 22:49:36.921+07', '2023-11-05 22:49:36.921+07');
        INSERT INTO "public"."faqs" ("id", "title", "description", "createdAt", "updatedAt") VALUES (4, 'Dapatkah Anda memberikan referensi atau studi kasus yang menunjukkan keberhasilan proyek outsourcing Anda sebelumnya?', 'Kami dapat memberikan referensi dan studi kasus yang menampilkan kemitraan sukses kami dengan klien, menyoroti hasil dan manfaat yang dicapai melalui solusi outsourcing kami.
        ', '2023-11-05 22:49:47.45+07', '2023-11-05 22:49:47.45+07');
        INSERT INTO "public"."faqs" ("id", "title", "description", "createdAt", "updatedAt") VALUES (5, 'Bagaimana Anda menjamin kualitas yang konsisten dan pengiriman tepat waktu layanan?', 'Untuk menjamin kualitas yang konsisten dan pengiriman tepat waktu, kami memiliki tim jaminan kualitas yang melakukan pemeriksaan secara teratur dan menerapkan metrik kinerja untuk memantau dan mempertahankan standar layanan.
        ', '2023-11-05 22:49:57.869+07', '2023-11-05 22:49:57.869+07');
        INSERT INTO "public"."faqs" ("id", "title", "description", "createdAt", "updatedAt") VALUES (1, 'Apa jenis layanan yang ditawarkan oleh perusahaan outsourcing Anda?', 'Perusahaan outsourcing kami menawarkan berbagai layanan, termasuk dukungan pelanggan, layanan TI, entri data, pengembangan perangkat lunak, dan pemasaran digital, antara lain.
        ', '2023-11-05 22:49:13.743+07', '2023-11-28 10:30:37.904+07');
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
