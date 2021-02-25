let num1 = 1
let num2 = 2

//Forma pos-fixada - Vai somar 1 
num1++
console.log(num1)
//Forma pre-fixada - Vai diminuir 1
--num1
console.log(num1)

//Ordem de PRECEDENCIA
//Deu verdadeiro pq incrementou antes de comparar
console.log(++num1 === num2--)
console.log(num1 === num2)

