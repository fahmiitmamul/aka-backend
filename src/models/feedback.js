'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class feedback extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            feedback.belongsTo(models.gender, {
                as: 'gender',
                foreignKey: 'gender_id',
            })
        }
    }
    feedback.init(
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            phone_number: DataTypes.STRING,
            gender_id: DataTypes.INTEGER,
            age: DataTypes.STRING,
            full_address: DataTypes.STRING,
            content: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: 'feedback',
        }
    )
    return feedback
}
