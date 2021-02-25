function avaliaNota(nota) {
    if (nota >= 0 && nota <= 100){
       let notaResto = 5 - (nota % 5) 
        if (nota < 38) {
            return 'Reprovado' + ' ' + nota
        } else {
            if (notaResto < 3){
            return nota + notaResto
            } else {
            return nota
            }
            }
    } else {
        return 'Nota Inválida'
    }
}

console.log(avaliaNota(100))
console.log(avaliaNota(30))
console.log(avaliaNota(38))
console.log(avaliaNota(88))
console.log(avaliaNota(61))

