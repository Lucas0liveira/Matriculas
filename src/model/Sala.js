const { Model, DataTypes } = require('sequelize');

class Sala extends Model {
  static init(connection) {
    super.init({
      numero: { type: DataTypes.INTEGER, primaryKey: true },
      andar: DataTypes.INTEGER,
      complexo: DataTypes.STRING,
    },
    {
      sequelize: connection,
      tableName: 'sala',
    });
  }

  static associate(models) {
    this.hasMany(models.Disciplina, { foreignKey: 'numero_sala', as: 'sala' });
  }
}

module.exports = Sala;
