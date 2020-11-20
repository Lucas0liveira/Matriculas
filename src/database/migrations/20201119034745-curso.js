module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('curso', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nome_curso: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    id_coordenador: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'coordenador', key: 'id' },
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

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('curso'),
};
