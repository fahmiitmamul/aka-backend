'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class testimony extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            testimony.belongsTo(models.position_of_work, {
                foreignKey: 'position_id',
                as: 'position',
            })
        }
    }
    testimony.init(
        {
            picture: DataTypes.STRING,
            profilephoto: DataTypes.STRING,
            name: DataTypes.STRING,
            position_id: DataTypes.INTEGER,
            description: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: 'testimony',
        }
    )
    return testimony
}
