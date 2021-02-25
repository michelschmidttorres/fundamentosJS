const escola = "Cod3r"

//Pegar a 4ª letra - contantdo do índice 0
console.log(escola.charAt(4))

//Fora do índice - e não gera erro - JS Não gera erro fácil - ;)
console.log(escola.charAt(5))

//Pegar o valor do caracter na tabela Unicode/ASC
console.log(escola.charCodeAt(3))

//Pegar o índice de uma letra
console.log(escola.indexOf('r'))

//Pegar uma parte da palavar - a partir de um determinado índice
console.log(escola.substring(1))

//Definir o índice de começo e fim - NÃO INCLUI O ÍNDICE FINAL (NO EXEMPLO ABAIXO NÃO INCLUI O 3)
console.log(escola.substring(0, 3))

//Concatenar - juntas string
console.log('Escola '.concat(escola).concat("!"))
//Também pode ser assim
console.log('Escola '+ escola + "!")

//Função para substituir um caracter
console.log(escola.replace(3, 'e'))

//Transformar uma string separada por vírgula para um Array
console.log('Ana,Maria,Pedro'.split(','))