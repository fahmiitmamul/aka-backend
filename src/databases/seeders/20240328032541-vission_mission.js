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
        INSERT INTO "public"."vision_missions" ("id", "vission", "mission", "createdAt", "updatedAt") VALUES (1, 'Menjadi penyedia solusi terkemuka yang inovatif dan dapat diandalkan di industri kami, yang memberdayakan klien kami untuk mencapai potensi penuh mereka dengan aman dan efisien.', 'Menyediakan solusi keamanan yang terintegrasi dan proaktif yang melindungi aset digital pelanggan dari ancaman yang semakin kompleks, sehingga memberikan rasa aman dan kepercayaan yang tinggi.', '2023-11-05 23:33:23.657+07', '2023-11-05 23:33:23.657+07');
        INSERT INTO "public"."vision_missions" ("id", "vission", "mission", "createdAt", "updatedAt") VALUES (2, 'Menjadi penyedia solusi terkemuka yang inovatif dan dapat diandalkan di industri kami, yang memberdayakan klien kami untuk mencapai potensi penuh mereka dengan aman dan efisien.', 'Menyediakan solusi keamanan yang terintegrasi dan proaktif yang melindungi aset digital pelanggan dari ancaman yang semakin kompleks, sehingga memberikan rasa aman dan kepercayaan yang tinggi.', '2023-11-05 23:33:24.326+07', '2023-11-05 23:33:24.326+07');
        INSERT INTO "public"."vision_missions" ("id", "vission", "mission", "createdAt", "updatedAt") VALUES (3, 'Menjadi penyedia solusi terkemuka yang inovatif dan dapat diandalkan di industri kami, yang memberdayakan klien kami untuk mencapai potensi penuh mereka dengan aman dan efisien.', 'Menyediakan solusi keamanan yang terintegrasi dan proaktif yang melindungi aset digital pelanggan dari ancaman yang semakin kompleks, sehingga memberikan rasa aman dan kepercayaan yang tinggi.', '2023-11-05 23:33:24.942+07', '2023-11-05 23:33:24.942+07');
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
