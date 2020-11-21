/* eslint-disable camelcase */
const Curso = require('../model/Curso');
const Coordenador = require('../model/Coordenador');
const Disciplina = require('../model/Disciplina');

module.exports = {
  async indexAll(req, res) {
    const curso = await Curso.findAll({
      include: [
        {
          model: Coordenador,
          as: 'coordenador',
          attributes: ['id', 'nome', 'email'],
        },
        {
          model: Disciplina,
          as: 'disciplinas',
          attributes: ['id', 'nome_disciplina'],
          through: {
            attributes: [],
          },
        },
      ],
    });

    if (!curso) {
      return res.status(400).json({ erro: 'Nenhum curso encontrado.' });
    }
    return res.json(curso);
  },
  async indexOne(req, res) {
    const { id } = req.params;

    const curso = await Curso.findByPk(id, {
      include: [
        {
          model: Coordenador,
          as: 'coordenador',
          attributes: ['id', 'nome', 'email'],
        },
        {
          model: Disciplina,
          as: 'disciplinas',
          attributes: ['id', 'nome_disciplina'],
          through: {
            attributes: [],
          },
        },
      ],
    });

    if (!curso) {
      return res.status(400).json({ erro: 'Curso não encontrado.' });
    }

    return res.json(curso);
  },

  async store(req, res) {
    const { nome_curso, id_coordenador } = req.body;

    const curso = await Curso.create({ nome_curso, id_coordenador });

    if (!curso) {
      return res.status(400).json({ erro: 'Falha ao inserir curso.' });
    }

    return res.json(curso);
  },

  async delete(req, res) {
    const { id } = req.params;

    const curso = await Curso.findByPk(id);

    if (!curso) {
      return res.status(400).json({ erro: 'Falha ao inserir curso.' });
    }

    curso.destroy();

    return res.json(curso);
  },

};
