/* eslint-disable guard-for-in */
/* eslint-disable camelcase */
const Aluno = require('../model/Aluno');
const Disciplina = require('../model/Disciplina');

module.exports = {

  async indexAll(req, res) {
    const aluno = await Aluno.findAll();

    if (!aluno) {
      return res.status(400).json({ erro: 'Nenhum aluno encontrado.' });
    }

    return res.json(aluno);
  },

  async indexOne(req, res) {
    const { id } = req.params;

    const aluno = await Aluno.findByPk(id);

    if (!aluno) {
      return res.status(400).json({ erro: 'Aluno não encontrado.' });
    }

    return res.json(aluno);
  },

  async store(req, res) {
    const {
      rga, nome, email, id_disciplinas,
    } = req.body;

    const aluno = await Aluno.create({ rga, nome, email });

    if (!aluno) {
      return res.status(400).json({ erro: 'Falha ao inserir aluno.' });
    }

    // eslint-disable-next-line no-restricted-syntax
    id_disciplinas.map(async (d) => {
      const disciplina = await Disciplina.findByPk(d);

      await aluno.addDisciplina(disciplina);
    });

    return res.json(aluno);
  },

  async update(req, res) {
    const { rga, nome, email } = req.body;
    const { id } = req.params;

    const aluno = await Aluno.findOne({ where: { id } });

    if (!aluno) {
      return res.status(400).json({ erro: 'Aluno não encontrado.' });
    }

    aluno.rga = rga;
    aluno.nome = nome;
    aluno.email = email;

    await aluno.save();

    return res.json(aluno);
  },

  async delete(req, res) {
    const { rga } = req.params;

    const aluno = await Aluno.findOne({ where: { rga } });

    if (!aluno) {
      return res.status(400).json({ erro: 'Aluno não encontrado.' });
    }

    aluno.destroy();

    return res.json(aluno);
  },

};
