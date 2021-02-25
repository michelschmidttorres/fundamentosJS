function tiposTriangulos(lado1, lado2, lado3) {
    if(lado1 === lado2 && lado2 ===lado3) {
       return 'Equilátero'          
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        return 'Isósceles' 
    } else { return 'Escaleno'}

}

console.log(tiposTriangulos(2,2,2))
console.log(tiposTriangulos(2,3,3))
console.log(tiposTriangulos(2,3,4))