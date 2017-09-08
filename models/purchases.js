'use strict';
module.exports = function(sequelize, DataTypes) {
  var Purchases = sequelize.define('Purchases', {
    item: DataTypes.STRING,
    quantity_sold: DataTypes.STRING,
    date: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Purchases;
};