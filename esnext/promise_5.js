function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try{
            con.log('Erro de proposito')
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
     })
}

funcionarOuNao('Testando...', 0.9)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(`${v}`),
        // Se houve um erro, vai cair no primeiro tratamento 
        // err => console.log(`Erro esp.: ${err}`)
    )
    .then(() => console.log('Quase Fim'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    // Os .then depois do .catch serão executados
    // O ideal não é colocar o .catch no fim e sim no meio para poder fazer o ecadeamento de .then
    .then(() => console.log('Fim'))