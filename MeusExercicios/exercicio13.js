const verificaDiaUtil = dia => {
    switch(dia) {
        case 1: 
            return "Domingo - Fim de Semana"
            break;
        case 2: 
            return "Segunda-feira - Dia útil"
            break;
        case 3:
            return "Terça-feira - Dia útil"
            break;
        case 4:
            return "Quarta-feira - Dia útil"
            break;
        case 5:
            return "Quinta-feira - Dia útil"
            break;
        case 6:
            return "Sexta-feira - Dia útil"
            break;
        case 7:
            return "Sábado - Fim de Semana"
            break;
        default:
            return "Dia inválido"    
    }
    
}

console.log(verificaDiaUtil(0))
console.log(verificaDiaUtil(1))
console.log(verificaDiaUtil(2))
console.log(verificaDiaUtil(3))
console.log(verificaDiaUtil(4))
console.log(verificaDiaUtil(5))
console.log(verificaDiaUtil(6))
console.log(verificaDiaUtil(7))
console.log(verificaDiaUtil(10))


