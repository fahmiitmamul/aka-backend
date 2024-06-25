'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class sub_menu extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            sub_menu.belongsTo(models.main_menu, {
                foreignKey: 'menu_id',
                as: 'sub_menu',
            })
        }
    }
    sub_menu.init(
        {
            menu: DataTypes.STRING,
            url: DataTypes.STRING,
            target: DataTypes.STRING,
            order: DataTypes.INTEGER,
            menu_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'sub_menu',
        }
    )
    return sub_menu
}
