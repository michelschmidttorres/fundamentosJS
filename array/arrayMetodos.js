const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
// Remove o último elemento do Array
pilotos.pop() // massa quebrou o carro!
console.log(pilotos)
// Adiciona um elemento na última posição do Array
pilotos.push('Verstappen')
console.log(pilotos)
// Remove o primeito elemento da lista
pilotos.shift()
console.log(pilotos)
// Coloca um novo elemento na primeira posição do Array
pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos dentro de um array

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

// Pegar um pedaço do array
const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)
console.log(pilotos)
// Pega do elemento 1 até o 3, o 4 não pega
const algunsPilotos2 = pilotos.slice(1 ,4)
console.log(algunsPilotos2)