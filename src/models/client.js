'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class client extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            client.belongsTo(models.business_type, {
                foreignKey: 'business_type_id',
                as: 'business_type',
            })

            client.belongsTo(models.province, {
                foreignKey: 'province_id',
                as: 'province',
            })

            client.belongsTo(models.district, {
                foreignKey: 'district_id',
                as: 'district',
            })

            client.belongsTo(models.regency, {
                foreignKey: 'regency_id',
                as: 'regency',
            })

            client.belongsTo(models.village, {
                foreignKey: 'village_id',
                as: 'village',
            })
        }
    }
    client.init(
        {
            picture: DataTypes.STRING,
            company_name: DataTypes.STRING,
            brand_name: DataTypes.STRING,
            business_type_id: DataTypes.INTEGER,
            company_email: DataTypes.STRING,
            phone_number: DataTypes.STRING,
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
        },
        {
            sequelize,
            modelName: 'client',
        }
    )
    return client
}
