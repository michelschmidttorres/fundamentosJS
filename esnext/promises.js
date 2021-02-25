function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Uma Promise aceita um único parâmetro, se desejar passar vários parâmetros deverá ser usado um objeto, etc...
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que Legal!')
    // a função .then pode ser chamada quantas vezes se quiser para gerar um encadeamento no tratamentdo da resposta da promise
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    // Forma de tratar erro, caso fosse executada a função reject ao invés de resolve
    .catch(e => console.log(e))