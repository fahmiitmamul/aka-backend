'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class contact_name extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            contact_name.belongsTo(models.business_type, {
                as: 'business_type',
                foreignKey: 'business_type_id',
            })
        }
    }
    contact_name.init(
        {
            date: DataTypes.DATE,
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            phone_number: DataTypes.STRING,
            company_name: DataTypes.STRING,
            business_type_id: DataTypes.INTEGER,
            full_address: DataTypes.STRING,
            description: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: 'contact_me',
        }
    )
    return contact_name
}
