'use strict'
const { Model } = require('sequelize')
const { generateRandomId } = require('../utils/generateid')
module.exports = (sequelize, DataTypes) => {
    class company_partner extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

            company_partner.belongsTo(models.business_type, {
                foreignKey: 'business_type_id',
                as: 'business_type',
            })

            company_partner.belongsTo(models.province, {
                foreignKey: 'province_id',
                as: 'province',
            })

            company_partner.belongsTo(models.district, {
                foreignKey: 'district_id',
                as: 'district',
            })

            company_partner.belongsTo(models.regency, {
                foreignKey: 'regency_id',
                as: 'regency',
            })

            company_partner.belongsTo(models.village, {
                foreignKey: 'village_id',
                as: 'village',
            })
        }
    }
    company_partner.init(
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
            full_address: DataTypes.STRING,
            description: DataTypes.TEXT,
            requirements: DataTypes.TEXT,
        },
        {
            hooks: {
                beforeCreate: (company_partner, options) => {
                    company_partner.id = generateRandomId()
                },
            },
            sequelize,
        },
        {
            sequelize,
            modelName: 'company_partner',
        }
    )
    return company_partner
}
