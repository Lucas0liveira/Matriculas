const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const Aluno = require('../model/Aluno');
const AlunoLog = require('../model/AlunoLog');
const Coordenador = require('../model/Coordenador');
const Curso = require('../model/Curso');
const Disciplina = require('../model/Disciplina');
const Professor = require('../model/Professor');
const Sala = require('../model/Sala');

const connection = new Sequelize(databaseConfig);

Aluno.init(connection);
AlunoLog.init(connection);
Coordenador.init(connection);
Curso.init(connection);
Disciplina.init(connection);
Professor.init(connection);
Sala.init(connection);

Aluno.associate(connection.models);
Coordenador.associate(connection.models);
Curso.associate(connection.models);
Disciplina.associate(connection.models);
Professor.associate(connection.models);
Sala.associate(connection.models);

module.exports = connection;
