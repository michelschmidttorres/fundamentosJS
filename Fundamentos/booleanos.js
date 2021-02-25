//No JavaScript além dos literais true e false, vários outros valores podem ser usados como booleanos

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

/*
 O símbolo de exclamação ! é uma negação, ou seja tudo que for precedido por ! ou seja NOT retornará o 
oposto(Não verdadeiro), baseado nisso a técnica utilizada para forçar outros valores a adquirir o valor de um
boleano é usar a dupla negação !!, que fará com que o valor seja convertido em true ou false
 */
isAtivo = 1
console.log(!!isAtivo)

isAtivo = 0
console.log(!!isAtivo)

// TODOS OS NÚEMEROS INTEIROS COM A EXCEÇÃO DO 0 SÃO VERDADEIROS
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!! ' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))


console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

/* O operador OU || (PIPE PIPE) Se um dos valores for verdadeiro, no caso a string vazia ' ' 
vai retornar verdadeiro*/
console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

//Uma maneira de retornar um valor padrão pra uma variável quando não definido
let nome = ''

//Caso nome não esteja válido use Desconhecido como valor padrão
console.log(nome || 'Desconhecido')







