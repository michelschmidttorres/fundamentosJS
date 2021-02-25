// let e const

// let além do escopo global e de função, let tem escopo de bloco
{
    var a = 2
    let b = 3
}
console.log(a)
//fora do escopo vai dar erro
//console.log(b)

// Template String
const produto = 'iPad'
console.log(`${produto}
é
caro!`)

// Destructuring
const [l, e, ...tras] = "Cod3r" 
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = { nome: 'Ana', idade:9 }
console.log(i, nome)
