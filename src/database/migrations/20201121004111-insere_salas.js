module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sala', [
      {
        numero: 13, andar: 1, complexo: 'Multiuso', created_at: new Date(), updated_at: new Date(),
      },
      {
        numero: 7, andar: 1, complexo: 'Multiuso', created_at: new Date(), updated_at: new Date(),
      },
      {
        numero: 2, andar: 1, complexo: 'Laboratórios', created_at: new Date(), updated_at: new Date(),
      },
      {
        numero: 4, andar: 2, complexo: 'Laboratórios', created_at: new Date(), updated_at: new Date(),
      },
      {
        numero: 15, andar: 2, complexo: 'Multiuso', created_at: new Date(), updated_at: new Date(),
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.;
  },
};
