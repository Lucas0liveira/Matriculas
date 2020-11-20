const { Model, DataTypes } = require('sequelize');

class Disciplina extends Model {
  static init(connection) {
    super.init({
      nome_disciplina: DataTypes.STRING,
      id_professor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'professor', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      numero_sala: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'sala', key: 'numero' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      sequelize: connection,
      tableName: 'disciplina',

    });
  }

  static associate(models) {
    this.belongsToMany(models.Aluno, { foreignKey: 'id_disciplina', through: 'aluno_disciplina', as: 'aluno' });
    this.belongsToMany(models.Curso, { foreignKey: 'id_disciplina', through: 'disciplina_curso', as: 'curso' });
    this.belongsTo(models.Sala, { foreignKey: 'numero_sala', as: 'sala' });
    this.belongsTo(models.Professor, { foreignKey: 'id_professor', as: 'professor' });
  }
}
module.exports = Disciplina;
