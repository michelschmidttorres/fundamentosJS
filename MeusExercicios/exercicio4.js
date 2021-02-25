function restoDivisao(dividendo, divisor) {
    return `Resultado: ${Math.floor(dividendo / divisor)} e o resto: ${dividendo % divisor}`
}

console.log(restoDivisao(11,4))