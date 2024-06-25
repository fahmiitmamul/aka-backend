'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class vision_mission extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    vision_mission.init(
        {
            vission: DataTypes.TEXT,
            mission: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: 'vision_mission',
        }
    )
    return vision_mission
}
