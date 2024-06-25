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
        INSERT INTO "public"."main_menus" ("id", "menu", "url", "target", "order", "createdAt", "updatedAt") VALUES (2, 'Management', '.', '_blank', 2, '2023-11-07 18:24:45.759+07', '2023-11-18 10:31:33.697+07');
        INSERT INTO "public"."main_menus" ("id", "menu", "url", "target", "order", "createdAt", "updatedAt") VALUES (1, 'Home', 'https://aka.itmamulfahmi.my.id', '_blank', 1, '2023-11-07 18:24:25.507+07', '2024-01-08 10:39:36.256+07');
        INSERT INTO "public"."main_menus" ("id", "menu", "url", "target", "order", "createdAt", "updatedAt") VALUES (3, 'Service', 'https://aka.itmamulfahmi.my.id/#service', '_blank', 3, '2023-11-07 18:25:09.525+07', '2024-01-08 10:40:15.702+07');
        INSERT INTO "public"."main_menus" ("id", "menu", "url", "target", "order", "createdAt", "updatedAt") VALUES (4, 'Artikel', 'https://aka.itmamulfahmi.my.id/#artikel', '_blank', 4, '2023-11-07 18:26:10.079+07', '2024-01-08 10:40:21.691+07');
        INSERT INTO "public"."main_menus" ("id", "menu", "url", "target", "order", "createdAt", "updatedAt") VALUES (5, 'Galeri', 'https://aka.itmamulfahmi.my.id/#galeri', '_blank', 5, '2023-11-07 18:26:33.527+07', '2024-01-08 10:40:26.108+07');
        INSERT INTO "public"."main_menus" ("id", "menu", "url", "target", "order", "createdAt", "updatedAt") VALUES (6, 'Kontak Kami', 'https://aka.itmamulfahmi.my.id/kontak-kami', '_blank', 6, '2023-11-07 18:26:48.974+07', '2024-01-08 10:40:32.219+07');
        INSERT INTO "public"."main_menus" ("id", "menu", "url", "target", "order", "createdAt", "updatedAt") VALUES (12, 'Bisnis', 'https://aka.itmamulfahmi.my.id/bisnis', '_blank', 7, '2023-11-28 11:38:37.865+07', '2024-01-08 10:40:35.419+07');
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
