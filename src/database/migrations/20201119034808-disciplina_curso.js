module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('disciplina_curso', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNUll: false,
    },
    id_disciplina: {
      type: Sequelize.INTEGER,
      allowNUll: false,
      references: { model: 'disciplina', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    id_curso: {
      type: Sequelize.INTEGER,
      allowNUll: false,
      references: { model: 'curso', key: 'id' },
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

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('disciplina_curso'),
};
