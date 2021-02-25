console.log(Math.ceil(6.1))

const obj1 = {}
//As das formas abaixo são equivalentes para atribuir um par chave/valor a um objeto
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome){
    // A palavar this torna o atributo do objeto público, ou seja poderá ser usado fora da função
    this.nome = nome
    this.exec = function () {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
obj3.exec()
