const Professor = require('../model/Professor');

module.exports = {

  async indexAll(req, res) {
    const professor = await Professor.findAll({
      include: {
        association: 'disciplinas',
        attributes: ['id', 'nome_disciplina'],
      },
    });

    if (!professor) {
      return res.json({ erro: 'Nenhum professor encontrado.' });
    }

    return res.json(professor);
  },

  async indexOne(req, res) {
    const { id } = req.params;

    const professor = await Professor.findByPk(id, {
      include: {
        association: 'disciplinas',
        attributes: ['id', 'nome_disciplina'],
      },
    });

    if (!professor) {
      return res.json({ erro: 'professor não encontrado.' });
    }

    return res.json(professor);
  },

  async store(req, res) {
    const { nome, email } = req.body;

    const professor = await Professor.create({ nome, email });

    if (!professor) {
      return res.json({ erro: 'Erro ao inserir professor.' });
    }

    return res.json(professor);
  },

  async delete(req, res) {
    const { id } = req.params;

    const professor = await Professor.findOne({ where: { id } });

    if (!professor) {
      return res.json({ erro: 'professor não encontrado.' });
    }

    professor.destroy();

    return res.json(professor);
  },
};
