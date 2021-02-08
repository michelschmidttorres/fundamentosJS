//CONSOLIDANDO O CONCEITO DE ESCOPO USANDO var
var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('dentro =', numero)

//FUJA DO ESCOPO GLOBAL!!!!!!!