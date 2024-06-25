'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vehicle_type_list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  vehicle_type_list.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'vehicle_type_list',
  });
  return vehicle_type_list;
};