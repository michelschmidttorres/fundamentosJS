// JavaScript possui um tipo chamado Infinity
console.log( 7 / 0)

//Quando existe um inteiro dentro de uma "STRING" - A operação aritimética é executada normalmente \o/
console.log("10" / 2)

//Quando usamos o sinal + o acima não vale - POIS o + com STRING - CONCATENA
console.log("10" + 2)

//Quando tentar fazer uma operação com uma string de fato a operação retornará Nan(Not a number)
console.log ("Show!" *2)

//Problema de precisão de ponto flutuante - Devido a especificação do IEEE que o javascript suporta
//Vai gerar algumas imprecisções em ponto flutuante
//Por questões de performance várias linguagens utilizam essa especificação
console.log (0.1 + 0.7)


 //console.log(10.toString()) - >> Retorna erro de invalid token - É possível usando a função NUMBER

//Colocando o número antes da função entre () é possível usar funções literalmente, sem ter que armazenar
// o valor em uma variável e depois chamada a função
console.log((10.345).toFixed(2))