const valor = 'Global'

//A função leva em consideração o local onde ela foi definida não onde ela está sendo executada
function minhaFuncao() {
    console.log(valor)
}

minhaFuncao()

//No caso abaixo quando invocada "minhaFuncao" está mais próxima do contexto Global
function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()