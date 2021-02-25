// var - palavra reservada (identificador) para declaração de variável
var a = 3

//Nomes das variáveis são extremamente importantes
// Dar nomes que reflitam de fato o que se está fazendo

//let - outra palavra reservada (identificador) para declaração de variável
let b = 4

//Existe diferença entre declarar variável com "var" e "let" será explicada mais a frente
//Dar preferência por declarar com "let"

/* Percebendo a primeira diferença entre "let" e "var"
   essas palavras são usadas na "CRIAÇÃO" da variável, 
   quando quisermos manipular ou recuperar o valor da variável já criada NÃO É NECESSÁRIO
   usar novamente "let" ou "var"
   Ao rodar o código abaixo porém, vamos perceber que no JAVASCRIPT mesmo a variável já estando criada
   usando "var" ele vai atribuir o novo valor a variável
   diferentemente de "let" que retornará um erro dizendo que a variável já foi declarada
   PRIMEIRO MOTIVO PRA USAR "LET" 
*/

var a = 30

//let 
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a, b)

//Você declara a variável depois pode usar quantas vezes quiser - Alterando os valores

const c = 5
//c = 5     
// Da erro pois não se pode mudar o valor de uma constante - O NOME DIZ TUDO
console.log(c)