const calculaFatorial = n => {
    let fatores = []
    let fatorial =1
    
    for(n; n > 0; n--) {
        fatores[n-1] = n
    }

    for(fator in fatores) {
        fatorial *= fatores[fator]  
   }
   return fatorial
}

console.log(calculaFatorial(7))
console.log(calculaFatorial(8))
console.log(calculaFatorial(9))
console.log(calculaFatorial(10))

//Solução do professor
function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))