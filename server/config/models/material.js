/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('material', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ref_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'material'
  });
};
