/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('book', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    dynasty: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    from: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    end: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'book'
  });
};
