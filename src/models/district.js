'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class district extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            district.hasMany(models.village, {
                foreignKey: 'district_id',
                as: 'village',
            })
        }
    }
    district.init(
        {
            regency_id: DataTypes.INTEGER,
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'district',
        }
    )
    return district
}
