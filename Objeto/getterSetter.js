const sequencia = {
    _valor: 1, //convenção - atributo privado(_ não fará o atributo ser privado) apenas uma foram de escrever
    get valor() {return this._valor++ },
    set valor(valor) { 
        if(valor > this.valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)