const veiculoModel = require('../model/veiculoModel');

module.exports = {
    listar(req, res) {
        const veiculos = veiculoModel.listarTodos();
        res.render('listagem', { veiculos});
    },

    exibirCadastro(req, res) {
      res.render('cadastro');  
    },

    adicionar(req, res) {
        const {id,nome, marca, modelo, ano, cor} = req.body;
        veiculoModel.adicionar(parseInt(id), nome , marca, modelo, parseInt(ano), cor);
        res.redirect('/veiculos');
    },

    editar(req, res) {
        const id = parseInt (req.params.id);
        const {nome, marca, modelo, ano, cor} = req.body;
        veiculoModel.editar(id, nome, marca, modelo, parseInt(ano), cor);
        res.redirect('/veiculos');
    },

    excluir(req, res) {
        const id = parseInt(req.params.id);
        veiculoModel.excluir(id);
        res.redirect('/veiculos');
    }

};