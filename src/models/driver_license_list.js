'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class driver_license_list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  driver_license_list.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'driver_license_list',
  });
  return driver_license_list;
};