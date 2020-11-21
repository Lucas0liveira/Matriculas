/* eslint-disable consistent-return */
/* eslint-disable guard-for-in */
/* eslint-disable camelcase */
// eslint-disable no-restricted-syntax
const Aluno = require('../model/Aluno');
const Disciplina = require('../model/Disciplina');
const Curso = require('../model/Curso');

module.exports = {

  async indexAll(req, res) {
    const aluno = await Aluno.findAll({
      include: [
        {
          model: Disciplina,
          as: 'disciplinas',
          attributes: ['id', 'nome_disciplina'],
          through: {
            attributes: [],
          },
        },
        {
          model: Curso,
          as: 'curso_do_aluno',
          attributes: ['id', 'nome_curso'],
        },
      ],
    });

    if (!aluno) {
      return res.status(400).json({ erro: 'Nenhum aluno encontrado.' });
    }

    return res.json(aluno);
  },

  async indexOne(req, res) {
    const { id } = req.params;

    const aluno = await Aluno.findByPk(id, {
      include: [
        {
          model: Disciplina,
          as: 'disciplinas',
          attributes: ['id', 'nome_disciplina'],
          through: {
            attributes: [],
          },
        },
        {
          model: Curso,
          as: 'curso_do_aluno',
          attributes: ['id', 'nome_curso'],
        },
      ],
    });

    if (!aluno) {
      return res.status(400).json({ erro: 'Aluno não encontrado.' });
    }

    return res.json(aluno);
  },

  async store(req, res) {
    const {
      rga, nome, email, curso, id_disciplinas,
    } = req.body;

    const aluno = await Aluno.create({
      rga, nome, email, curso,
    });

    if (!aluno) {
      return res.status(400).json({ erro: 'Falha ao inserir aluno.' });
    }

    id_disciplinas.map(async (d) => {
      const disciplina = await Disciplina.findByPk(d);

      if (!disciplina) {
        res.status(400).json({ erro: 'Uma ou mais das disciplinas selecionadas não foi encontrada.' });
      }
      try {
        await aluno.addDisciplina(disciplina);
      } catch (error) {
        return res.status(400).json({
          erro: error,
        });
      }
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

    try {
      await aluno.save();
    } catch (error) {
      return res.status(400).json({
        erro: error,
      });
    }

    return res.json(aluno);
  },

  async assign(req, res) {
    const { id } = req.params;
    const { disciplinas } = req.body;

    const aluno = await Aluno.findByPk(id);

    disciplinas.map(async (d) => {
      const disciplina = await Disciplina.findByPk(d);

      if (!disciplina) {
        res.status(400).json({ erro: 'Uma ou mais das disciplinas selecionadas não foi encontrada.' });
      }
      try {
        await aluno.addDisciplina(disciplina);
      } catch (error) {
        return res.status(400).json({
          erro: error,
        });
      }
    });
    return res.status(200).json({ mensagem: 'Aluno matriculado com sucesso' });
  },

  async delete(req, res) {
    const { id } = req.params;

    const aluno = await Aluno.findOne({ where: { id } });

    if (!aluno) {
      return res.status(400).json({ erro: 'Aluno não encontrado.' });
    }

    try {
      aluno.destroy();
    } catch (error) {
      return res.status(400).json({
        erro: error,
      });
    }

    return res.json(aluno);
  },

};
