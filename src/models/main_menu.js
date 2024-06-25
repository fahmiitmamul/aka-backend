'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class main_menu extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            main_menu.hasMany(models.sub_menu, {
                foreignKey: 'menu_id',
                as: 'sub_menu',
            })
        }
    }
    main_menu.init(
        {
            menu: DataTypes.STRING,
            url: DataTypes.STRING,
            target: DataTypes.STRING,
            order: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'main_menu',
        }
    )
    return main_menu
}
