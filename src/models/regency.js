'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class regency extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            regency.hasMany(models.district, {
                foreignKey: 'regency_id',
                as: 'district',
            })
        }
    }
    regency.init(
        {
            province_id: DataTypes.INTEGER,
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'regency',
        }
    )
    return regency
}
