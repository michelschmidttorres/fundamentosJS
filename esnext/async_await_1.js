const { set } = require("lodash")
const { resolve } = require("path")

function esperarPor (tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve()
        }, tempo)
    })
}

function retornaValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    }) 
}

async function executar() {
    /* Somente é possível utilizar a palavra reservada "await" dentro de uma função marcada com "async"
     Await faz parecer ser um código síncrono embora não seja
     No caso abaixo ele vai esperar até que a variável "valor" seja atribuída com o retorno da Promise 
     Somente depois será executada a próxima linha
     O AWAIT SEMPRE SERÁ EXECUTADO COM UMA FUNÇÂO QUE RETORNA UMA PROMISE */
    let valor = await retornaValor()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor +3
}

/* O código abaixo não retorna um valor e sim uma promise
const v = executar()
console.log(v)
 */
// Este é método de obter o valor de retorno

/* A maneira abaixo FUNCIONA!
executar().then(console.log)
*/

// Outra maneira seria criando uma função marcada com async e de dentro dela usar o await para esperar a execução da Promise
async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()
