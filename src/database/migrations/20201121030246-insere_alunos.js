module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('aluno', [
      {
        rga: 201819060001, nome: 'Leonardo', email: 'leonardo@ufms.br', curso: 1, created_at: new Date(), updated_at: new Date(),
      },
      {
        rga: 201819060002, nome: 'Lucas', email: 'lucas@ufms.br', curso: 1, created_at: new Date(), updated_at: new Date(),
      },
      {
        rga: 201819060003, nome: 'Hermione', email: 'hermione@ufms.br', curso: 1, created_at: new Date(), updated_at: new Date(),
      },
      {
        rga: 201819060004, nome: 'Ronald', email: 'ronald@ufms.br', curso: 1, created_at: new Date(), updated_at: new Date(),
      },
      {
        rga: 201815670001, nome: 'Neville', email: 'neville@ufms.br', curso: 2, created_at: new Date(), updated_at: new Date(),
      },
      {
        rga: 201815670002, nome: 'Harry', email: 'harry@ufms.br', curso: 2, created_at: new Date(), updated_at: new Date(),
      },
      {
        rga: 201815670003, nome: 'George', email: 'george@ufms.br', curso: 2, created_at: new Date(), updated_at: new Date(),
      },
      {
        rga: 201842420001, nome: 'Draco', email: 'draco@ufms.br', curso: 3, created_at: new Date(), updated_at: new Date(),
      },
      {
        rga: 201842420002, nome: 'Tom', email: 'tom@ufms.br', curso: 3, created_at: new Date(), updated_at: new Date(),
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.;
  },
};
