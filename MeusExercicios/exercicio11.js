function testaBissextos(ano) {
    if (ano <= 0){
        return false}
    else if (ano % 400 == 0) {
        return true
    } else if(ano % 4 == 0 && ano % 100 != 0) {
        return true
    } else {
        return false
    }
}

console.log(testaBissextos(0))
console.log(testaBissextos(-1))
console.log(testaBissextos(1004))
console.log(testaBissextos(1292))
console.log(testaBissextos(1500))
console.log(testaBissextos(1900))
console.log(testaBissextos(2000))

