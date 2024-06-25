'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class needed_position extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  needed_position.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'needed_position',
  });
  return needed_position;
};