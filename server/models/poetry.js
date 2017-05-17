/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('poetry', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    author: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(1000),
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
    },
    keywords: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    author_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'poetry'
  });
};
