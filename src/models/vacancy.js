'use strict'
const { Model } = require('sequelize')
const { generateRandomId } = require('../utils/generateid')
module.exports = (sequelize, DataTypes) => {
    class vacancy extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            vacancy.belongsTo(models.gender, {
                foreignKey: 'gender_id',
                as: 'gender',
            })

            vacancy.belongsTo(models.religion, {
                foreignKey: 'religion_id',
                as: 'religion',
            })

            vacancy.belongsTo(models.work_experience, {
                foreignKey: 'work_experience_id',
                as: 'work_experience',
            })

            vacancy.belongsTo(models.marital_status, {
                foreignKey: 'marital_status_id',
                as: 'marital_status',
            })

            vacancy.belongsTo(models.vaccine, {
                foreignKey: 'vaccine_id',
                as: 'vaccine',
            })

            vacancy.belongsTo(models.province, {
                foreignKey: 'e_ktp_province_id',
                as: 'e_ktp_province',
            })

            vacancy.belongsTo(models.regency, {
                foreignKey: 'e_ktp_regency_id',
                as: 'e_ktp_regency',
            })

            vacancy.belongsTo(models.district, {
                foreignKey: 'e_ktp_district_id',
                as: 'e_ktp_district',
            })

            vacancy.belongsTo(models.village, {
                foreignKey: 'e_ktp_village_id',
                as: 'e_ktp_village',
            })

            vacancy.belongsTo(models.province, {
                foreignKey: 'domicile_province_id',
                as: 'domicile_province',
            })

            vacancy.belongsTo(models.regency, {
                foreignKey: 'domicile_regency_id',
                as: 'domicile_regency',
            })

            vacancy.belongsTo(models.district, {
                foreignKey: 'domicile_district_id',
                as: 'domicile_district',
            })

            vacancy.belongsTo(models.village, {
                foreignKey: 'domicile_village_id',
                as: 'domicile_village',
            })

            vacancy.belongsTo(models.status, {
                foreignKey: 'status_id',
                as: 'status',
            })

            vacancy.belongsTo(models.needed_position, {
                foreignKey: 'position_id',
                as: 'position',
            })

            vacancy.belongsTo(models.bank_name, {
                foreignKey: 'bank_name_id',
                as: 'bank',
            })
        }
    }
    vacancy.init(
        {
            profile_photo: DataTypes.STRING,
            full_name: DataTypes.STRING,
            birth_place: DataTypes.STRING,
            nik: DataTypes.STRING,
            e_ktp: DataTypes.STRING,
            birth_date: DataTypes.DATE,
            age: DataTypes.STRING,
            height: DataTypes.STRING,
            gender_id: DataTypes.INTEGER,
            religion_id: DataTypes.INTEGER,
            skills: DataTypes.STRING,
            work_experience_id: DataTypes.INTEGER,
            marital_status_id: DataTypes.INTEGER,
            vaccine_id: DataTypes.INTEGER,
            first_phone_number: DataTypes.STRING,
            second_phone_number: DataTypes.STRING,
            email: DataTypes.STRING,
            facebook: DataTypes.STRING,
            instagram: DataTypes.STRING,
            line: DataTypes.STRING,
            twitter: DataTypes.STRING,
            linkedin: DataTypes.STRING,
            e_ktp_province_id: DataTypes.INTEGER,
            e_ktp_regency_id: DataTypes.INTEGER,
            e_ktp_district_id: DataTypes.INTEGER,
            e_ktp_village_id: DataTypes.INTEGER,
            e_ktp_postal_code: DataTypes.STRING,
            e_ktp_full_address: DataTypes.STRING,
            domicile_province_id: DataTypes.INTEGER,
            domicile_regency_id: DataTypes.INTEGER,
            domicile_district_id: DataTypes.INTEGER,
            domicile_village_id: DataTypes.INTEGER,
            domicile_postal_code: DataTypes.STRING,
            domicile_full_address: DataTypes.STRING,
            account_name: DataTypes.STRING,
            account_number: DataTypes.STRING,
            bank_name_id: DataTypes.INTEGER,
            urgent_full_name: DataTypes.STRING,
            applicant_relationships: DataTypes.STRING,
            urgent_phone_number: DataTypes.STRING,
            describe_yourself: DataTypes.STRING,
            expected_salary: DataTypes.STRING,
            cv: DataTypes.STRING,
            other_document: DataTypes.STRING,
            status_id: DataTypes.INTEGER,
            position_id: DataTypes.INTEGER,
            applied_date: DataTypes.DATE,
            education: DataTypes.JSONB,
            work_experience_histories: DataTypes.JSONB,
            driver_license: DataTypes.JSONB,
            vehicle_type: DataTypes.JSONB,
        },
        {
            hooks: {
                beforeCreate: (vacancy, options) => {
                    vacancy.id = generateRandomId()
                },
            },
            sequelize,
        },
        {
            sequelize,
            modelName: 'vacancy',
        }
    )
    return vacancy
}
