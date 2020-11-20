module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('alunoLog', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      old_rga: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false,
      },
      new_rga: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false,
      },
      old_nome: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false,
      },
      new_nome: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false,
      },
      old_email: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false,
      },
      new_email: {
        type: Sequelize.STRING(50),
        unique: true,
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

    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('alunoLog');
  },
};
