function teste1(num) {
    //Para apenas uma setença de código não precisa {}
    if(num > 7)
        console.log(num)
    //Não tem nenhuma ligação com o bloco if    
    console.log('Final')
}

teste1(6)
teste1(8)


function teste2(num) {
   //Não use ; em estruturas de controle
    if(num > 7); {
        console.log(num)
    }
}

teste2(6)
teste2(8)