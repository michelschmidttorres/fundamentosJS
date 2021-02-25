//Função usado no Catch, exemplos de coisas que podem ser "lançadas no erro" usando throw
function tratarErroELancar(erro) {
    //throw new Error('MINHA MSG DE ERRO PERSONALIZADA')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    //Algo que potencialmente pode dar erro, executa dentro do bloco try
    try {
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { //catch, o que fazer se der erro, no caso vai chamar uma função, passando o parametro e, que é o erro
        tratarErroELancar(e)
    } finally { //É algo que pode ser usado, sempre vai ser executado dando erro ou não
        console.log('final')
    }
}
//Troquei o name por nome pra dar erro
const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)