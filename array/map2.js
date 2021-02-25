const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "kit de Lapis", "preco": 42.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços
// Meu método
let elementos
precos = carrinho.map(function(e){
     elementos = JSON.parse(e)
     return parseFloat(elementos.preco).toFixed(2)
})

console.log(precos)

//Método Coder
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)