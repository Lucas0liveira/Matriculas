const { Model, DataTypes } = require('sequelize');

class Coordenador extends Model {
  static init(connection) {
    super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize: connection,
      tableName: 'coordenador',
    });
  }

  static associate(models) {
    this.hasOne(models.Curso, { foreignKey: 'id', as: 'curso' });
  }
}
module.exports = Coordenador;
