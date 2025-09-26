let veiculos = [
    { id: 1, marca: "Toyota", modelo: "Corolla", ano: 2020, cor: "Prata" },
    { id: 2, marca: "Honda", modelo: "Civic", ano: 2019, cor: "Preto" },
    { id: 3, marca: "Ford", modelo: "Focus", ano: 2018, cor: "Branco" },
    { id: 4, marca: "Chevrolet", modelo: "Cruze", ano: 2021, cor: "Azul" },
    { id: 5, marca: "Volkswagen", modelo: "Golf", ano: 2017, cor: "Vermelho" }
];

module.exports = {
    listarTodos() {
        return veiculos;
    },


    adicionar(id,nome, marca, modelo, ano, cor) {
        veiculos.push({id, nome, marca, modelo, ano, cor});
    },

    editar(id, nome, marca, modelo, ano, cor) {
        const index = veiculos.findIndex(v => v.id === id);
        if (index === -1 ) return false;
        veiculos[index].nome = nome;
        veiculos[index].marca = marca;
        veiculos[index].modelo = modelo;
        veiculos[index].ano = ano;
        veiculos[index].cor = cor;
        return true;
    },

    excluir(id) {
        const index = veiculos.findIndex(v => v.id === id);
        if (index === -1) return false;
        veiculos.splice(index, 1);
        return true;
    }

};
