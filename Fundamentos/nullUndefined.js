//Ententer a diferença de atribuição por REFERÊNCIA e por VALOR

let valor //não inicializada, retorna undefined

valor = null //ausência de valor, não aponta pra nenhum endereço de memória
//NÃO É LEGAL DEFINIR UNDEFINED, DEIXA PRA LINGUAGEM
console.log(valor)
//console.log(valor.toString()) //ERRO

//O MAIS INDICADO É SEMPRE TER UM VALOR PADRÃO PARA VARIÁVEIS

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)



