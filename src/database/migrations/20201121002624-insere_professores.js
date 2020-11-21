module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('professor', [
      {
        nome: 'Vanessa Borges', email: 'vanessa@ufms.br', created_at: new Date(), updated_at: new Date(),
      },
      {
        nome: 'Bruno Nogueira', email: 'bruno@ufms.br', created_at: new Date(), updated_at: new Date(),
      },
      {
        nome: 'Hudson Borges', email: 'hudson@ufms.br', created_at: new Date(), updated_at: new Date(),
      },
      {
        nome: 'Luciana Cheung', email: 'luciana@ufms.br', created_at: new Date(), updated_at: new Date(),
      },
      {
        nome: 'Minerva McGonagall', email: 'minerva@ufms.br', created_at: new Date(), updated_at: new Date(),
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.;
  },
};
