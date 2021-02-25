// Armazenando uma funcao em uma variável ou constante
const imprimirSoma = function (a, b){
    console.log (a+b)
}

imprimirSoma(2 ,3)

//Armazenando uma funcao arrow => em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implícito - quando tem apenas uma instrução "a-b" no exemplo abaixo
const subtracao = (a, b) => a - b

console.log(subtracao(2, 3))

//Função arrow com único parametro nem precisa de ()
const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')