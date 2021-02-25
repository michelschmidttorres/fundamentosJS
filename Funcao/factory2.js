function criarProduto(nome, preco) {
    return {
         nome,
         preco,
         deconto: 0.1
    }
}

console.log(criarProduto('Caneta', 2))
console.log(criarProduto('Lapis', 1))