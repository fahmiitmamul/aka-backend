'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  event.init({
    picture: DataTypes.STRING,
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    date: DataTypes.DATE,
    place: DataTypes.STRING,
    start_time: DataTypes.STRING,
    end_time: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'event',
  });
  return event;
};