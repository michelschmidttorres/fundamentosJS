function Pessoa() {
    this.idade = 0
//Driblar o comportamento da linguagem onde o this pode varias (Altera o this por self abaixo)
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa 

