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
        INSERT INTO "public"."users" ("id", "first_name", "last_name", "email", "password", "role_id", "permissions_allowed", "createdAt", "updatedAt") VALUES (3, 'admin', 'admin', 'admin', '$argon2id$v=19$m=65536,t=3,p=4$/A95vRMa/rVNk7QDgkY6wg$sCoL1QuHU6nWhX/WTocdbvZ3/SOSG+yiqSGjaNKAHoY', 2, '{"gender_read": true, "vaccine_read": true, "gender_create": true, "gender_delete": true, "gender_update": true, "position_read": true, "religion_read": true, "education_read": true, "vaccine_create": true, "vaccine_delete": true, "vaccine_update": true, "position_create": true, "position_delete": true, "position_update": true, "religion_create": true, "religion_delete": true, "religion_update": true, "user_roles_read": true, "departement_read": true, "education_create": true, "education_delete": true, "education_update": true, "salary_count_read": true, "user_roles_create": true, "user_roles_delete": true, "user_roles_update": true, "vehicle_type_read": true, "business_type_read": true, "departement_create": true, "departement_delete": true, "departement_update": true, "field_of_work_read": true, "driver_license_read": true, "marital_status_read": true, "salary_count_create": true, "salary_count_delete": true, "salary_count_update": true, "vehicle_type_create": true, "vehicle_type_delete": true, "vehicle_type_update": true, "business_type_create": true, "business_type_delete": true, "business_type_update": true, "employee_status_read": true, "field_of_work_create": true, "field_of_work_delete": true, "field_of_work_update": true, "needed_position_read": true, "work_experience_read": true, "driver_license_create": true, "driver_license_delete": true, "driver_license_update": true, "marital_status_create": true, "marital_status_delete": true, "marital_status_update": true, "employee_status_create": true, "employee_status_delete": true, "employee_status_update": true, "needed_position_create": true, "needed_position_delete": true, "needed_position_update": true, "work_experience_create": true, "work_experience_delete": true, "work_experience_update": true}', '2023-11-24 11:30:08.28+07', '2024-02-29 10:05:36.284+07');
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
