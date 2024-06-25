'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class client_picture extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    client_picture.init(
        {
            picture: DataTypes.STRING,
            title: DataTypes.STRING,
            content: DataTypes.TEXT,
            order: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'client_picture',
        }
    )
    return client_picture
}
