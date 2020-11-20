module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('sala', {
    numero: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    andar: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    complexo: {
      type: Sequelize.STRING(50),
      allowNull: false,
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

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('sala'),
};
