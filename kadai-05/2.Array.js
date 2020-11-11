//配列
const animals = ['dog', 'cat', 'lion', 'rabbit']

console.log(animals[0])
console.log(animals[1])
console.log(animals[2])
console.log(animals[3])
console.log(animals[100]) //変な数値はundefindが帰ってくる

console.log(animals.length)//数値の量を出力

animals.push('bird')//追加
console.log(animals)

const last= animals.pop()//最後のを抜き出して代入
console.log(last)//取り出した値が出力
console.log(animals)//取り出されたデータは消える

//forループを使う
for (let index = 0; index < array.length; index++) {
    const animal = animals[index];
    console.log(animal)
}
for (const animal of animals) {
    console.log(animals)
}
//上と下の処理は一緒。短縮バージョン
