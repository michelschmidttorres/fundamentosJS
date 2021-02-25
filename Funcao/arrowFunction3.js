let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)
comparaComThis(obj)


let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)

//Em uma função arrow o this apontará para o arquivo corrente
comparaComThisArrow(module.exports)

//Tentando usar o bind em uma função Arrow
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

//O this da função Arrow não pode ser alterado pela função bind

