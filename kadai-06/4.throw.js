console.log(1)
//throw "エラーです"
console.log(2)
//あえてエラーを出す

const isEven = (number) =>
if(number % 2 === 0){
    console.log('偶数です')
} else {
    throw new Error("偶数ではありません")
}
isEven(11)

