// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }

}

//As chaves no contexto abaixo representam o operador de desestruturação(destructing)
//Tire de dentro do objeto pessoa os atributos nome e idade
const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

//Quando tentar extrair dados aninhados o caminho tem que existir
const {conta: {ag, num} } = pessoa
console.log(ag, num)

