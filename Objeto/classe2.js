class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

// Usando a sintaxe de classe a palavra reservada extends - define a relação de herança(prototype)
class Pai extends Avo {
    constructor (sobrenome, profissao = 'Professor') {
        //receber da classe pai
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)