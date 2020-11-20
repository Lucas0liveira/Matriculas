const Sala = require('../model/Sala');

module.exports = {

  async indexAll(req, res) {
    const sala = await Sala.findAll();

    if (!sala) {
      return res.status(400).json({ erro: 'Nenhuma sala encontrada.' });
    }
    return res.json(sala);
  },

  async indexOne(req, res) {
    const { numero } = req.params;

    const sala = await Sala.findByPk(numero);

    if (!sala) {
      return res.status(400).json({ erro: 'Sala não encontrada.' });
    }

    return res.json(sala);
  },

  async store(req, res) {
    const { numero, andar, complexo } = req.body;

    const sala = await Sala.create({ numero, andar, complexo });

    if (!sala) {
      return res.json({ erro: 'Erro ao cadastrar uma sala.' });
    }

    return res.json(sala);
  },

  async delete(req, res) {
    const { numero } = req.params;

    const sala = await Sala.findOne({ where: { numero } });

    if (!sala) {
      return res.json({ erro: 'Sala não encontrada.' });
    }

    sala.destroy();

    return res.json(sala);
  },

};
