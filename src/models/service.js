'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class service extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            service.hasMany(models.company_request_services, {
                foreignKey: 'service_id',
                as: 'service',
            })
        }
    }
    service.init(
        {
            picture: DataTypes.STRING,
            title: DataTypes.STRING,
            content: DataTypes.TEXT,
            order: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'service',
        }
    )
    return service
}
