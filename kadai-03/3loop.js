//ループ

///.for⽂の構造.
//for.(初期化式;条件式;増分式){
//    繰り返し処理
//}

let sum = 0
for (let n = 0; n <= 15; n++) {
    sum = sum + n
}
condsole.log(sum)

////10000.未満の3で割ると1余る正の整数を全て書き出す
let x = 0
for (let x = 1; x <= 100; x++) {
    if(x % 3 === 1) {
        console.log(x)
    }
}