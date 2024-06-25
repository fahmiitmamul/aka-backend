'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class departement extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            departement.hasMany(models.team, {
                foreignKey: 'departement_id',
                as: 'departement',
            })
        }
    }
    departement.init(
        {
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'departement',
        }
    )
    return departement
}
