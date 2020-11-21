module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('curso', [
      {
        nome_curso: 'Engenharia de Software', id_coordenador: 1, created_at: new Date(), updated_at: new Date(),
      },
      {
        nome_curso: 'Ciência da Computação', id_coordenador: 2, created_at: new Date(), updated_at: new Date(),
      },
      {
        nome_curso: 'Engenharia da Computação', id_coordenador: 3, created_at: new Date(), updated_at: new Date(),
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.;
  },
};
