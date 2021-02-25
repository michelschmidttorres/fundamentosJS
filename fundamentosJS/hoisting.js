//Não tem motivo para usar Hoisting, é para entender o comportamento da linguagem
console.log('a =', a)
var a = 2
console.log('a =', a)

//Hoisting não funciona com let
let b = 4
console.log('b =', b)