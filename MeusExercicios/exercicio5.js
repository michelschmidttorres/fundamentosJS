function formatarValorDecimal(valor1) {
    return `R$ ${valor1.toFixed(2).toString().replace(".", ",")}`
}

console.log(formatarValorDecimal(0.1 + 0.2))