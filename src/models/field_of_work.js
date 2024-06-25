'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class field_of_work extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  field_of_work.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'field_of_work',
  });
  return field_of_work;
};