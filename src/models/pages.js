'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class pages extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            pages.belongsTo(models.category, {
                as: 'category',
                foreignKey: 'category_id',
            })
        }
    }
    pages.init(
        {
            picture: DataTypes.STRING,
            date: DataTypes.DATE,
            category_id: DataTypes.INTEGER,
            title: DataTypes.STRING,
            slug: DataTypes.STRING,
            content: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: 'pages',
        }
    )
    return pages
}
