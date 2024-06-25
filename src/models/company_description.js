'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class company_description extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    company_description.init(
        {
            picture: DataTypes.STRING,
            title: DataTypes.STRING,
            content: DataTypes.TEXT,
            order: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'company_description',
        }
    )
    return company_description
}
