//Compara valor
console.log('01)', '1' == 1)
//Compara valor e tipo (estritamente igual)
console.log('02)', '1' === 1)
//Diferente 
console.log('03)', '3' != 3)
//Estritamente diferente
console.log('04)', '3' !== 3)

//Menor que
console.log('05)', 3 < 2)
//Maior que
console.log('06)', 3 > 2)
//Menor ou igual que
console.log('07)', 3 <= 2)
//Maior ou igual que
console.log('08)', 3 >= 2)

//Definindo dois objetos
const d1 = new Date(0)
const d2 = new Date(0)
/*Objetos são atribuídos por referencia(endereços de memória), dois objetos do mesmo tipo 
vazios não são iguais, pois são dois endereços de memória diferentes*/
console.log('09)', d1 === d2)
console.log('10', d1 == d2)
//O Atributo retornado pela função getTime é um number por isso é igual
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)

//MAIS ADEQUADO É COMPARA USANDO ESTRITAMENTE IGUAL