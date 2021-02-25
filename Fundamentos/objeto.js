//Um objeto é definido por {}
//Em JS objeto é uma coleção de Chave . Valor

//Dentro de um objeto você tem um indentificador único

const prod1 = {}
//Definimos o atributo nome
prod1.nome = 'Celular Ultra Mega'

prod1.preco = 4988.90

//Possível usar nome de identificadores com espaço
prod1['Desconto Legal'] = 0.40 // EVITAR USAR ATRIBUTOS COM ESPAÇOS

console.log(prod1)

//Outra notação
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

/*JSON Não é a mesma coisa que objeto
JSON é texto, e notação literal de objeto é atributo, compartamento, etc...*/

console.log(prod2)