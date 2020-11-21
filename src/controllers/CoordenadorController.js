const Coordenador = require('../model/Coordenador');

module.exports = {

  async indexAll(req, res) {
    const coordenador = await Coordenador.findAll({
      include: {
        association: 'curso',
        attributes: ['nome_curso'],
      },
    });

    if (!coordenador) {
      return res.status(400).json({ erro: 'Nenhum coordenador encontrado.' });
    }
    return res.json(coordenador);
  },

  async indexOne(req, res) {
    const { id } = req.params;

    const coordenador = await Coordenador.findByPk(id, {
      include: {
        association: 'curso',
        attributes: ['nome_curso'],
      },
    });

    if (!coordenador) {
      return res.status(400).json({ erro: 'Coordenador não encontrado.' });
    }

    return res.json(coordenador);
  },

  async store(req, res) {
    const { nome, email } = req.body;

    const coordenador = await Coordenador.create({ nome, email });

    if (!coordenador) {
      return res.status(400).json({ erro: 'Falha ao inserir Coordenador.' });
    }

    return res.json(coordenador);
  },

  async delete(req, res) {
    const { id } = req.params;

    const coordenador = await Coordenador.findByPk(id);

    if (!coordenador) {
      return res.status(400).json({ erro: 'Falha ao inserir Coordenador.' });
    }

    coordenador.destroy();

    return res.json(coordenador);
  },
};
