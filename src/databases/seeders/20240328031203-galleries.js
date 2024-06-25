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
        INSERT INTO "public"."galleries" ("id", "picture", "title", "description", "createdAt", "updatedAt") VALUES (1, 'uploads/1699199444030', 'Client', 'Client', '2023-11-05 22:50:47.001+07', '2023-11-05 22:50:47.001+07');
        INSERT INTO "public"."galleries" ("id", "picture", "title", "description", "createdAt", "updatedAt") VALUES (2, 'uploads/1699199458592', 'Batch', 'Batch', '2023-11-05 22:51:06.451+07', '2023-11-05 22:51:06.451+07');
        INSERT INTO "public"."galleries" ("id", "picture", "title", "description", "createdAt", "updatedAt") VALUES (3, 'uploads/1699199479481', 'Training', 'Training', '2023-11-05 22:51:22.081+07', '2023-11-05 22:51:22.081+07');
        INSERT INTO "public"."galleries" ("id", "picture", "title", "description", "createdAt", "updatedAt") VALUES (4, 'uploads/1699199510383', 'Psikotest', 'Psikotest', '2023-11-05 22:51:53.403+07', '2023-11-05 22:51:53.403+07');
        INSERT INTO "public"."galleries" ("id", "picture", "title", "description", "createdAt", "updatedAt") VALUES (6, 'uploads/1699199552206', 'Fresh Graduate', 'Fresh Graduate', '2023-11-05 22:52:35.21+07', '2023-11-05 22:52:35.21+07');
        INSERT INTO "public"."galleries" ("id", "picture", "title", "description", "createdAt", "updatedAt") VALUES (7, 'uploads/1699199575775', 'Outsourcing', 'Outsourcing', '2023-11-05 22:52:58.573+07', '2023-11-05 22:52:58.573+07');
        INSERT INTO "public"."galleries" ("id", "picture", "title", "description", "createdAt", "updatedAt") VALUES (8, 'uploads/1699199591632', 'CV', 'CV', '2023-11-05 22:53:14.72+07', '2023-11-05 22:53:14.72+07');
        INSERT INTO "public"."galleries" ("id", "picture", "title", "description", "createdAt", "updatedAt") VALUES (9, 'uploads/1699199612423', 'Digital Skill', 'Digital Skill', '2023-11-05 22:53:34.97+07', '2023-11-05 22:53:34.97+07');
        INSERT INTO "public"."galleries" ("id", "picture", "title", "description", "createdAt", "updatedAt") VALUES (10, 'uploads/1699199631420', 'Lamaran Kerja', 'Lamaran Kerja', '2023-11-05 22:53:53.726+07', '2023-11-05 22:53:53.726+07');
        INSERT INTO "public"."galleries" ("id", "picture", "title", "description", "createdAt", "updatedAt") VALUES (11, 'uploads/1699199656888', 'Memarkir Mobil', 'Memarkir Mobil', '2023-11-05 22:54:20.128+07', '2023-11-05 22:54:20.128+07');
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
