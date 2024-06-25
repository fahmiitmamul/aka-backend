'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class team extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            team.belongsTo(models.departement, {
                foreignKey: 'departement_id',
                as: 'departement',
            })

            team.belongsTo(models.position_of_work, {
                foreignKey: 'position_id',
                as: 'position',
            })
        }
    }
    team.init(
        {
            picture: DataTypes.STRING,
            name: DataTypes.STRING,
            departement_id: DataTypes.INTEGER,
            position_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'team',
        }
    )
    return team
}
