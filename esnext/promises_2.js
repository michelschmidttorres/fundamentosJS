// Callback Hell
setTimeout(function (){
    console.log('Executando callback...')

    setTimeout(function () {
        console.log('Executando callback...')
   
        setTimeout(function () {
            console.log('Executando callback...')
        }, 2000)        
    }, 2000)
}, 2000)


// Usando Promise
function esperarPor (tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando Promise')
            resolve('Vishhhh')
        }, tempo)
    })
}

esperarPor(3000).then(texto => console.log(texto))

// Comparar com o primeiro código usando Callback
esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)