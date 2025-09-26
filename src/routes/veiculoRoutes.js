const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculoController');

router.get('/', veiculoController.listar);
router.get('/cadastro', veiculoController.exibirCadastro);
router.post('/cadastro', veiculoController.adicionar);
router.post('/editar/:id', veiculoController.editar);
router.get('/excluir/:id', veiculoController.excluir);

module.exports = router;
