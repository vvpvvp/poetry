/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('poetry_line', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    poetry: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    words: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    desc: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    seq: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'poetry_line'
  });
};
