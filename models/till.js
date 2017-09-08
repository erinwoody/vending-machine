'use strict';
module.exports = function(sequelize, DataTypes) {
  var Till = sequelize.define('Till', {
    balance: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Till;
};

