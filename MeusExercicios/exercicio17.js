const calculaSalario = (salario, plano) => {
    switch(plano) {
        case 'A':
            return salario * 1.1
            break
        case 'B':
            return salario * 1.15
            break
        case 'C':
            return salario * 1.20
            break
        default:
            return 'Plano Inválido'
    }
}

console.log(calculaSalario(1000, 'A'))
console.log(calculaSalario(1000, 'B'))
console.log(calculaSalario(1000, 'C'))
console.log(calculaSalario(1000, 'D'))