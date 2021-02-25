const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

// Toda a função tem o atributo prototype
console.log(ferrari.prototype)
// Objeto não tem atributo prototype e sim __proto__
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
// Objeto prototype é o nível mais alto
console.log(Object.prototype.__proto__)

function meuObjeto() {
    console.log(typeof Object, typeof meuObjeto)
    console.log(Object.prototype, meuObjeto.prototype)
}

meuObjeto()
