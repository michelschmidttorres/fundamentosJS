// JSON - Java Script Object Notation
const obj = { a: 1, b: 2, c: 3, soma() {return a + b + c }}
// JSON.stringify converte os dados no formato textual da notação JSON
// Excluiu a função, pois é um formato de dados, não é executado
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{ a: 1, b:2, c:3 }"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{"a": 1, "b": 2, "c": 2 }'))
// O atributo deve ser delimitado por aspas duplas
// Strings também devem ser delimitadas por aspas duplas
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))
