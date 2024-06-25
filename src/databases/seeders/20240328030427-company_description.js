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
            INSERT INTO "public"."company_descriptions" ("id", "picture", "title", "content", "order", "createdAt", "updatedAt") VALUES (1, 'uploads/1699202786080', 'Performa', 'Menawarkan solusi efektif untuk meningkatkan kinerja situs web Anda dengan pengoptimalan kinerja terkini, memastikan pengalaman pengguna yang responsif dan cepat.', 1, '2023-11-05 23:46:27.72+07', '2023-11-05 23:46:27.72+07');
            INSERT INTO "public"."company_descriptions" ("id", "picture", "title", "content", "order", "createdAt", "updatedAt") VALUES (2, 'uploads/1699202859157', 'Efisiensi Waktu', 'Mengintegrasikan solusi inovatif yang menghemat waktu bagi Anda dan tim Anda, memungkinkan fokus pada kegiatan inti bisnis dengan meminimalkan pekerjaan rutin yang berulang', 2, '2023-11-05 23:47:41.134+07', '2023-11-05 23:47:41.134+07');
            INSERT INTO "public"."company_descriptions" ("id", "picture", "title", "content", "order", "createdAt", "updatedAt") VALUES (3, 'uploads/1699202879729', 'Hemat Biaya', 'Menyediakan strategi yang tepat guna untuk mengurangi biaya operasional tanpa mengorbankan kualitas, mengoptimalkan pengeluaran sehingga Anda dapat meraih hasil maksimal dengan anggaran yang lebih efisien', 3, '2023-11-05 23:48:01.847+07', '2023-11-05 23:48:01.847+07');
            INSERT INTO "public"."company_descriptions" ("id", "picture", "title", "content", "order", "createdAt", "updatedAt") VALUES (7, 'uploads/1699495056675', 'Perkembangan Bisnis', 'Menyediakan panduan holistik untuk mendorong pertumbuhan bisnis Anda dengan memanfaatkan teknologi dan strategi pasar terbaru, memperluas jangkauan Anda dan membantu mencapai tujuan bisnis jangka panjang.', 4, '2023-11-09 08:57:38.428+07', '2023-11-09 08:57:38.428+07');
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
