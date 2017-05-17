/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('author', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dynasty: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    born: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    died: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    src: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'author'
  });
};
