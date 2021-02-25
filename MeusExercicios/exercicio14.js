const verificaFruta = fruta => {
    let normalizaFruta = fruta.toLowerCase()
    switch(normalizaFruta) {
        case "maçã":
            return "Não vendemos esta fruta aqui"
            break;
        case "kiwi":
            return "Estamos com escassez de kiwis"
            break;
        case "melancia":
            return "Aqui está, são 3 reais o quilo"
            break;
        default:
            return new Error("Fruta desconhecida")

    }
}

console.log(verificaFruta("MAÇÃ"))
console.log(verificaFruta("KiWi"))
console.log(verificaFruta("Melancia"))
console.log(verificaFruta("Laranja"))