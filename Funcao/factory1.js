// É uma função que retorna um objeto

const prod1 = {
    nome: '...',
    preco: 24
}

const prod2 = {
    nome: '...',
    preco: 36
}

function criarProduto() {
    return {
        nome: 'Produto1',
        preco: 45
    }
}

console.log(criarProduto())