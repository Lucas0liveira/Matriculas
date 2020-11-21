module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('disciplina', [
      {
        nome_disciplina: 'Laboratório de Bancos de Dados', numero_sala: 13, id_professor: 1, created_at: new Date(), updated_at: new Date(),
      },
      {
        nome_disciplina: 'Inteligência artificial', numero_sala: 7, id_professor: 2, created_at: new Date(), updated_at: new Date(),
      },
      {
        nome_disciplina: 'Programação para Web', numero_sala: 2, id_professor: 3, created_at: new Date(), updated_at: new Date(),
      },
      {
        nome_disciplina: 'Fundamentos da Teoria da Computação', numero_sala: 2, id_professor: 4, created_at: new Date(), updated_at: new Date(),
      },
      {
        nome_disciplina: 'Empreendedorismo', numero_sala: 7, id_professor: 5, created_at: new Date(), updated_at: new Date(),
      },

    ]);
    await queryInterface.bulkInsert('disciplina_curso', [
      {
        id_disciplina: 1, id_curso: 1, created_at: new Date(), updated_at: new Date(),
      },
      {
        id_disciplina: 1, id_curso: 2, created_at: new Date(), updated_at: new Date(),
      },
      {
        id_disciplina: 1, id_curso: 3, created_at: new Date(), updated_at: new Date(),
      },
      {
        id_disciplina: 2, id_curso: 1, created_at: new Date(), updated_at: new Date(),
      },
      {
        id_disciplina: 2, id_curso: 2, created_at: new Date(), updated_at: new Date(),
      },
      {
        id_disciplina: 3, id_curso: 1, created_at: new Date(), updated_at: new Date(),
      },
      {
        id_disciplina: 4, id_curso: 1, created_at: new Date(), updated_at: new Date(),
      },
      {
        id_disciplina: 4, id_curso: 2, created_at: new Date(), updated_at: new Date(),
      },
      {
        id_disciplina: 4, id_curso: 3, created_at: new Date(), updated_at: new Date(),
      },
      {
        id_disciplina: 5, id_curso: 1, created_at: new Date(), updated_at: new Date(),
      },
      {
        id_disciplina: 5, id_curso: 3, created_at: new Date(), updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.;
  },
};
