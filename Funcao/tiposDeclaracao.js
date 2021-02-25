/* Vantagem da function declaration - A ordem de execução do JS, ele carrega primeiro todas as funções, 
ou seja, é possível ter acesso a função mesmo antes de sua declaração no código*/
console.log(soma(3, 4))

//O mesmo não é verdade para function expression e named function expression
console.log(sub(3, 4)) //ERRO

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function(x, y){
    return x - y
}

/*A vantagem de nomear uma função que será atribuída a uma variável está no fato de seu nome aparecer no stack track 
em DEBUG*/
// named function expression
const mult = function mult(x, y) {
    return x * y
}

