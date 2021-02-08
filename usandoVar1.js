/* Variáveis definidas com var só tem dois escopos ou Global ou dentro de uma Function*/
{
    {
        {
            {var sera = 'Será???'}
        }
    }
}
//ESCOPO - Var estará visível mesmo fora do bloco de código
console.log(sera)

/*O mesmo não é válido quando se está usando funções, mesmo usando var, a variável estará
vísivel somente dentro do ESCOPO da função */
function teste() {
    var local = 123
}

//O erro abaixo exemplifica o comentário acima
teste()
console.log(local)
