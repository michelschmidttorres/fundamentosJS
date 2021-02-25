const pessoa = {
    saudacao: 'Bom dia!',
    //ECMA Script 2015 - Definir uma função direto
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
//O this vai sair de contexto
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

//A função bind define de qual contexto será usado o this
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

const falar2 = pessoa.falar
falar2()
