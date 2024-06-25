'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class article extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            article.belongsTo(models.category, {
                as: 'category',
                foreignKey: 'category_id',
            })
        }
    }
    article.init(
        {
            picture: DataTypes.STRING,
            title: DataTypes.STRING,
            category_id: DataTypes.INTEGER,
            source: DataTypes.STRING,
            slug: DataTypes.STRING,
            content: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: 'article',
        }
    )
    return article
}
