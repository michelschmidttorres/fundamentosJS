//Array em JavaScript não tem tamanho fixado, pode ter múltiplos tipos

// Defindo dentro de [] e separador ,
const valores = [7.7, 8.9, 6.3, 9.2]
//Valores acessados pelos índices contados a partir de 0
console.log(valores[0], valores[3])
//Quando não existe retorna undefined
console.log(valores[4])

//Adicionar valor
valores[4] = 10
console.log(valores)

//Mostrar tamanho do Array
console.log(valores.length)

//push método para adicionar valores a um Array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//Não é uma boa prática misturar tipos em arrays

//Tira o último valor do array
console.log(valores.pop())
//Delete um item do array
delete valores[0]
console.log(valores)

console.log(typeof valores)