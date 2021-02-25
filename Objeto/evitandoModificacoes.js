// Object.preventExtensions
// Impede a adição de novas chaves(atributos)
// Ainda é possível modificar os valores e deletar chaves
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
//Testa se o objeto é extensível
console.log('Extensível:', Object.isExtensible(produto))
// O que impediria troca de valor seriao o freeze
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
// Não deu erro, mas também não adicionou no objeto
produto.desconto = 0.15
delete produto.tag
console.log(produto)

// Object.seal
// Não consegue adicionar e nem EXCLUIR atributos(chaves)
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes
