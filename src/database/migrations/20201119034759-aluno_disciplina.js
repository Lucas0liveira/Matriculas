module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('aluno_disciplina', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    id_aluno: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'aluno', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    id_disciplina: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'disciplina', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('aluno_disciplina'),
};
