'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class user_log extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            user_log.belongsTo(models.role, {
                foreignKey: 'role_id',
                as: 'role',
            })
        }
    }
    user_log.init(
        {
            user_name: DataTypes.STRING,
            role_id: DataTypes.INTEGER,
            crud_activites: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'user_log',
        }
    )
    return user_log
}
