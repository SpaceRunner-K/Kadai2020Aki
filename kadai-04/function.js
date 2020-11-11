function hello() {
    console.log('hello!')
    console.log('hello!!')
    console.log('hello!!!')
}
hello()

function greet(name) {
console.log('こんにちは、'+ name+'!')
}
greet('⽴命太郎') //.こんにちは、⽴命太郎!.と表⽰される.
function add(a,b) {
console.log(a+b)
}
add(2,3)//.2.+.3.の結果が表⽰される

function ggg(a,b) {
    return a + b
}
const result = ggg(2,3) //.result.に2+3の結果が代⼊される