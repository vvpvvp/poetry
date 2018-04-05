/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('poetry_words', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    words: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    size: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    singlewords: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    columns: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'poetry_words'
  });
};
