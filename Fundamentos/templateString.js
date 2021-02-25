/*
Em outras linguagens é chamado de interpolação, serve para executar funções ou mostrar variáveis, inclusive 
quebrando linhas sem ter a necessidade de ficar concatenando tudo
*/

//Exemplo sem uso de Template String
const nome = 'Rebeca'
const concatenacao = 'Olá ' + 
nome + '!'

/*
Exemplo com uso de template string
Começa e termina com ` "backtick" e para chamar a "interpolação" ou execução de um código interpretável pela 
liguagem "${SEU CODIGO, VARIÁVEL, ETC}"" 
*/
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

//espressoes
console.log(`1 + 1 = ${1+1}`)

//Função Arrow - Vamos ver no futuro \0/
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)


