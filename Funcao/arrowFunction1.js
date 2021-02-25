let dobro = function a () {
    return 2 * a
}

//Arrow function sempre será anônima, para chama-la sempre teremos que armazena-la em uma variavel ou constante 
dobro = (a) => {
    return 2 * a 
}
//Return Implícito 
dobro = a => 2 * a

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'

console.log(ola())