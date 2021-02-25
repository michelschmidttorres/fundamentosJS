// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3)) 

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

/* Em uma função tradicional this aponta para global
   Mas pode ter seu contexto alterado usando bind, call ou apply 
   NA FUNÇÃO ARROW O 'this' sempre apontará para module.exports ou seja o arquivo no qual ele foi definido(contexto lexico)
*/

//paramentro default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais forte')

// operador rest (spread) - no contexto de função o nome é rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))
