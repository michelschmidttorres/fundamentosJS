console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

// Forma válida para inserir um novo elemento, MAIS USADA PARA SUBSTITUIR UM ELEMENTO EXISTENTE
aprovados[3] = 'Paulo'
// Forma mais usual de inserir um elemento na última posição do Array
aprovados.push('Abia')
console.log(aprovados.length)
// É possível definir um elemento em uma posição avançada não definida
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === null)
console.log(aprovados[8] === undefined)
console.log(aprovados)
// método de ordenação do array (ALTERA O ARRAY)
aprovados.sort()
console.log(aprovados)
// simplemente muda pra undefined o índice 1
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)
