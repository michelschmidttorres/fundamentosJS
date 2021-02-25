// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas a função

// Contexto léxico em ação

const x = 'Global'

function fora(){
    const x = 'Local1'
    function dentro(){
        return x
    }
    return dentro
}

function outroContexto(){
    const x = 'Local2'
    const minhaFuncao2 = fora()
    console.log(minhaFuncao2())
    console.log(`Este é o valor da constante "x": "${x}" na função outroContexto`)
}

const minhaFuncao = fora()

console.log(minhaFuncao())

outroContexto()

console.log(`Este é o valor da constante "x": "${x}" no contexto GLOBAL`)