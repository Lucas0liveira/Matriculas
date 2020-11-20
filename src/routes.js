const express = require('express');
const AlunoController = require('./controllers/AlunoController');
const ProfessorController = require('./controllers/ProfessorController');
const CoordenadorController = require('./controllers/CoordenadorController');
const DisciplinaController = require('./controllers/DisciplinaController');
const SalaController = require('./controllers/SalaController');
const CursoController = require('./controllers/CursoController');

const routes = express.Router();

routes.get('/', (req, res) => res.json({ hello: 'world' }));

routes.get('/aluno', AlunoController.indexAll);
routes.get('/aluno/:id', AlunoController.indexOne);
routes.post('/aluno', AlunoController.store);
routes.put('/aluno/:id', AlunoController.update);
routes.delete('/aluno/:id', AlunoController.delete);

routes.get('/professor', ProfessorController.indexAll);
routes.get('/professor/:id', ProfessorController.indexOne);
routes.post('/professor', ProfessorController.store);
routes.delete('/professor/:id', ProfessorController.delete);

routes.get('/coordenador', CoordenadorController.indexAll);
routes.get('/coordenador/:id', CoordenadorController.indexOne);
routes.post('/coordenador', CoordenadorController.store);
routes.delete('/coordenador/:id', CoordenadorController.delete);

routes.get('/curso/:id_curso/disciplina', DisciplinaController.indexAll);
routes.get('/curso/:id_curso/disciplina/:id', DisciplinaController.indexOne);
routes.post('/curso/:id_curso/disciplina', DisciplinaController.store);
routes.delete('/curso/:id_curso/disciplina/:id', DisciplinaController.delete);

routes.get('/sala', SalaController.indexAll);
routes.get('/sala/:numero', SalaController.indexOne);
routes.post('/sala', SalaController.store);
routes.delete('/sala/:numero', SalaController.delete);

routes.get('/curso', CursoController.indexAll);
routes.get('/curso/:id', CursoController.indexOne);
routes.post('/curso', CursoController.store);
routes.delete('/curso/:id', CursoController.delete);

// routes.get('/curso', CursoController.indexAll);
// routes.get('/curso/:id', CursoController.indexOne);

module.exports = routes;
