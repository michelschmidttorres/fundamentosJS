const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]


//Sem calbacks
const notasBaixas1 = []

for (let i in notas) {
    if(notas[i]<=7)
    notasBaixas1.push(notas[i])
}

     console.log(notasBaixas1)



 //Com Callback
const notaBaixas2 = notas.filter(function(nota) {  
    return nota < 7 
})

console.log(notaBaixas2)


 //Com Callback
 const notaMenorQue7 = nota => nota < 7
 const notaBaixas3 = notas.filter(notaMenorQue7)

 console.log(notaBaixas3)



