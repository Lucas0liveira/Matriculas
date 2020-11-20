/* eslint-disable camelcase */

const Disciplina = require('../model/Disciplina');
const Curso = require('../model/Curso');

module.exports = {

  async indexAll(req, res) {
    const disciplina = await Disciplina.findAll();

    if (!disciplina) {
      return res.status(400).json({ erro: 'Nenhuma disciplina encontrada.' });
    }
    return res.json(disciplina);
  },

  async indexOne(req, res) {
    const { id } = req.params;

    const disciplina = await Disciplina.findByPk(id);

    if (!disciplina) {
      return res.status(400).json({ erro: 'Disciplina não encontrada.' });
    }

    return res.json(disciplina);
  },

  async store(req, res) {
    const { id_curso } = req.params;
    const { nome_disciplina, numero_sala, id_professor } = req.body;

    const curso = await Curso.findOne({ where: { id: id_curso } });

    if (!curso) {
      return res.status(400).json({ erro: 'Falha ao inserir disciplina: Curso não encontrado.' });
    }

    const disciplina = await Disciplina.create({ nome_disciplina, numero_sala, id_professor });

    if (!disciplina) {
      return res.status(400).json({ erro: 'Falha ao inserir disciplina.' });
    }

    await curso.addDisciplina(disciplina); // pq não existe?

    return res.json(disciplina);
  },

  async delete(req, res) {
    const { id } = req.params;

    const disciplina = await Disciplina.findByPk(id);

    if (!disciplina) {
      return res.status(400).json({ erro: 'Disciplina não encontrada.' });
    }

    disciplina.destroy();

    return res.json(disciplina);
  },
};
