function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise(bit a bit) xor
    //outra forma de escrever o acima
    const comprarTv32  = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador unário - testa um parametro

    //Válido apartir do ECMA Script 2015, não precisa escrever comprarSorvete: ComprarSorvete
    //Ele usa o esquema de chave e valor já atribuiído na váriavel ou constante da função
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false, false))
