//Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
/*Flexibilidades do JS, nos casos que faltar parametro ou for passado parametros demais
não retorna erro*/
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
imprimirSoma()

//Funcao com retorno
//No exemplo abaixo = 1 atribui um valor padrão pra b
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))