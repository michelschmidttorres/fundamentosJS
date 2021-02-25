// código síncrono, você atribui a váriavel e logo em seguida a usa
let a = 1
console.log(a)

// código asíncrono, você atribui a váriavel uma promessa que obterá um dado no futuro
// Uma Promise recebe uma função como parâmetro que irá cumprir a promessa
// Uma Promise sempre retornará apenas um único valor, no caso abaixo o valor 4 não será retornado
let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3, 4)
})

// Para retornar mais de um valor usamos objeto, array...
let q = new Promise(function(cumprirPromessa) {
    cumprirPromessa({
        x: 3,
        y: 4
    })
})

let r = new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

console.log(typeof Promise)
console.log(typeof p)
console.log(p)

// Para obter o valor retornado por uma promisse dever ser utilizado o método .then
// Esse metódo deverá receber como parametro uma funcão que receberá como entrada o valor retornado pela Promise 
// Aqui também confirmamos que a Promise não retorna mais de um valor.
p.then(function(valor, x) {
    console.log(valor, x)
})

//Aqui vemos o objeto retornado pela Promise com mais de um valor.
q.then(function(valor) {
    console.log(valor)
})

// O método .then pode ser usado de maneira encadeada
// O retorno do método anterior será a entrada do próximo
r   
    // Vai retornar o primeiro elemento do Array 'Ana'
    .then(valor => valor[0])
    // Vai retornar a primeira letro do elemento 'Ana' = 'A'
    .then(primero => primero[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))

// Outra maneira de executar o código acima compondo funções

function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

let letraMinuscula = letra => letra.toLowerCase()

r
    //Como o .then já vai passar o retorno que ele recebe como parâmentro, pode-se executar essa chamada simplesmente
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)

