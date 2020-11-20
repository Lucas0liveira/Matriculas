module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('disciplina', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    nome_disciplina: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    numero_sala: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'sala', key: 'numero' },
    },
    id_professor: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'professor', key: 'id' },
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

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('disciplina'),
};
