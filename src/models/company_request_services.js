'use strict'
const { Model } = require('sequelize')
const { generateRandomId } = require('../utils/generateid')
module.exports = (sequelize, DataTypes) => {
    class company_request_services extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            company_request_services.belongsTo(models.status, {
                foreignKey: 'status_id',
                as: 'status',
            })

            company_request_services.belongsTo(models.service, {
                foreignKey: 'service_id',
                as: 'service',
            })

            company_request_services.belongsTo(models.business_type, {
                foreignKey: 'business_type_id',
                as: 'business_type',
            })

            company_request_services.belongsTo(models.province, {
                foreignKey: 'province_id',
                as: 'province',
            })

            company_request_services.belongsTo(models.regency, {
                foreignKey: 'regency_id',
                as: 'regency',
            })

            company_request_services.belongsTo(models.district, {
                foreignKey: 'district_id',
                as: 'district',
            })

            company_request_services.belongsTo(models.village, {
                foreignKey: 'village_id',
                as: 'village',
            })
        }
    }
    company_request_services.init(
        {
            company_logo: DataTypes.STRING,
            company_name: DataTypes.STRING,
            nib: DataTypes.STRING,
            npwp: DataTypes.STRING,
            business_type_id: DataTypes.INTEGER,
            company_email: DataTypes.STRING,
            company_phone: DataTypes.STRING,
            pic_name: DataTypes.STRING,
            pic_position: DataTypes.STRING,
            pic_email: DataTypes.STRING,
            pic_phone: DataTypes.STRING,
            province_id: DataTypes.INTEGER,
            district_id: DataTypes.INTEGER,
            regency_id: DataTypes.INTEGER,
            village_id: DataTypes.INTEGER,
            postal_code: DataTypes.STRING,
            status_id: DataTypes.INTEGER,
            full_address: DataTypes.STRING,
            description: DataTypes.STRING,
            requirements: DataTypes.STRING,
            service_id: DataTypes.INTEGER,
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
            modelName: 'company_request_services',
        }
    )
    return company_request_services
}
