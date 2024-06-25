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
        INSERT INTO "public"."events" ("id", "picture", "title", "slug", "date", "place", "start_time", "end_time", "createdAt", "updatedAt") VALUES (1, 'uploads/1699199107013', 'Seminar Bisnis', 'http://localhost:3000/seminar-bisnis', '2023-10-23 00:00:00+07', 'Jakarta, Indonesia', '13:00 PM', '14:00 PM', '2023-11-05 22:45:09.694+07', '2023-11-05 22:45:09.694+07');
        INSERT INTO "public"."events" ("id", "picture", "title", "slug", "date", "place", "start_time", "end_time", "createdAt", "updatedAt") VALUES (2, 'uploads/1699199146818', 'Digital Marketing', 'http://localhost:3000/digital-marketing', '2023-10-23 00:00:00+07', 'Jakarta, Indonesia', '13:00 PM', '14:00 PM', '2023-11-05 22:45:49.453+07', '2023-11-05 22:45:49.453+07');
        INSERT INTO "public"."events" ("id", "picture", "title", "slug", "date", "place", "start_time", "end_time", "createdAt", "updatedAt") VALUES (3, 'uploads/1699199279744', 'Obrolan UKM', 'http://localhost:3000/obrolan-ukm', '2023-10-23 00:00:00+07', 'Jakarta, Indonesia', '13:00 PM', '14:00 PM', '2023-11-05 22:48:04.162+07', '2023-11-05 22:48:04.162+07');

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
