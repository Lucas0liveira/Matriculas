const { Model, DataTypes } = require('sequelize');
const AlunoLog = require('./AlunoLog');

const data = {
  old_rga: '',
  new_rga: '',
  old_nome: '',
  new_nome: '',
  old_email: '',
  new_email: '',
};

class Aluno extends Model {
  static init(connection) {
    super.init({
      rga: DataTypes.STRING,
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      hooks: {
        beforeUpdate: (aluno) => {
          data.old_rga = aluno.previous('rga');
          data.old_nome = aluno.previous('nome');
          data.old_email = aluno.previous('email');
        },
        afterUpdate: async (aluno) => {
          data.new_rga = aluno.rga;
          data.new_nome = aluno.nome;
          data.new_email = aluno.email;

          await AlunoLog.create({
            old_rga: data.old_rga,
            old_nome: data.old_nome,
            old_email: data.old_email,
            new_rga: data.new_rga,
            new_nome: data.new_nome,
            new_email: data.new_email,
          });
        },
      },
      sequelize: connection,
      tableName: 'aluno',
    });
  }

  static associate(models) {
    this.belongsToMany(models.Disciplina, { foreignKey: 'id_aluno', through: 'aluno_disciplina', as: 'disciplina' });
  }
}

module.exports = Aluno;
