module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('coordenador', [
      {
        nome: 'Jane Dirce', email: 'jane@ufms.br', created_at: new Date(), updated_at: new Date(),
      },
      {
        nome: 'Dumbledore', email: 'dumbledore@ufms.br', created_at: new Date(), updated_at: new Date(),
      },
      {
        nome: 'Snape', email: 'snape@ufms.br', created_at: new Date(), updated_at: new Date(),
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.;
  },
};
