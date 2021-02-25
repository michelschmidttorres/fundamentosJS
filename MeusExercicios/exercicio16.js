const Calculadora = (a, b, operacao) => {
    switch(operacao) {
        case 'soma':
            return a + b
            break
        case 'subtração':
            return a - b
            break
        case 'multiplicação':
            return a * b
            break
        case 'divisão':
            return a / b
            break
        default:
            return 'Operação inválida'
    }
}

console.log(Calculadora(100, 25, 'soma'))
console.log(Calculadora(9, 3, 'subtração'))
console.log(Calculadora(5, 5, 'multiplicação'))
console.log(Calculadora(80, 20, 'divisão'))
console.log(Calculadora(100, 25, 'fatoração'))