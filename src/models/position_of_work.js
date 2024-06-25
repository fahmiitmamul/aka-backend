'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class position_of_work extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            position_of_work.hasMany(models.team, {
                foreignKey: 'position_id',
                as: 'position',
            })
        }
    }
    position_of_work.init(
        {
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'position_of_work',
        }
    )
    return position_of_work
}
