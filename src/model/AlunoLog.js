const { Model, DataTypes } = require('sequelize');

class AlunoLog extends Model {
  static init(connection) {
    super.init({
      old_rga: DataTypes.STRING,
      new_rga: DataTypes.STRING,
      old_nome: DataTypes.STRING,
      new_nome: DataTypes.STRING,
      old_email: DataTypes.STRING,
      new_email: DataTypes.STRING,
    },
    {
      sequelize: connection,
      tableName: 'alunoLog',
    });
  }
}

module.exports = AlunoLog;
