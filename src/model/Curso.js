const { Model, DataTypes } = require('sequelize');

class Curso extends Model {
  static init(connection) {
    super.init({
      nome_curso: DataTypes.STRING,
      id_coordenador: DataTypes.INTEGER,
    },
    {
      sequelize: connection,
      tableName: 'curso',
    });
  }

  static associate(models) {
    this.belongsTo(models.Coordenador, { foreignKey: 'id_coordenador', as: 'coordenador' });
    this.belongsToMany(models.Disciplina, { foreignKey: 'id_curso', through: 'disciplina_curso', as: 'disciplina' });
  }
}
module.exports = Curso;
