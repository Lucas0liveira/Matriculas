const { Model, DataTypes } = require('sequelize');

class Professor extends Model {
  static init(connection) {
    super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize: connection,
      tableName: 'professor',
    });
  }

  static associate(models) {
    this.hasMany(models.Disciplina, { foreignKey: 'id', as: 'id_professor' });
  }
}

module.exports = Professor;
