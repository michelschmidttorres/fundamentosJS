//Let é restrito ao bloco(além da função) de código onde ele é declarado
var numero = 1
{
    //preferência ao menor escopo
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

