'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class visitor extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    visitor.init(
        {
            ipAddress: DataTypes.STRING,
            city: DataTypes.STRING,
            region: DataTypes.STRING,
            country: DataTypes.STRING,
            loc: DataTypes.STRING,
            visitDate: DataTypes.STRING,
            time: DataTypes.STRING,
            userAgent: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'visitor',
        }
    )
    return visitor
}
