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
        INSERT INTO "public"."social_media" ("id", "picture", "name", "url", "createdAt", "updatedAt") VALUES (1, 'uploads/1699201754609', 'Faceboook', 'https://www.facebook.com/', '2023-11-05 23:29:16.227+07', '2023-11-05 23:29:16.227+07');
        INSERT INTO "public"."social_media" ("id", "picture", "name", "url", "createdAt", "updatedAt") VALUES (2, 'uploads/1699201779658', 'LinkedIn', 'https://www.linkedin.com/', '2023-11-05 23:29:41.476+07', '2023-11-05 23:29:41.476+07');
        INSERT INTO "public"."social_media" ("id", "picture", "name", "url", "createdAt", "updatedAt") VALUES (3, 'uploads/1699201854336', 'Twitter', 'https://www.twitter.com/', '2023-11-05 23:30:56.364+07', '2023-11-05 23:30:56.364+07');
        INSERT INTO "public"."social_media" ("id", "picture", "name", "url", "createdAt", "updatedAt") VALUES (4, 'uploads/1699201948277', 'Google Play', 'https://www.play.google.com/', '2023-11-05 23:32:29.813+07', '2023-11-05 23:32:29.813+07');

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
