/*Usando uma função arrow gravada na const resultado, onde nota é parametro e não precisa
de () pq é um parametro único, o sintaxe => indica que virá uma instrução de código
OPERADOR TERNARIO: DIVIDIDO EM 3 PARTES
1 - OPERADOR RELACIONAL seguido de ?
2 - SE VERDADEIRO UM RESULTADO, no exemplo abaixo aprovado
3 - : SE FALSO UM OUTRO RESULTADO, no exemplo abaixo reprovado*/
const resultado = nota => nota >=7 ? 'Aprovado' : 'Reprovado'
console.log(resultado(7.1))
console.log(resultado(6.7))

