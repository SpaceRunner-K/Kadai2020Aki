const str1 = "abc"
const str2 = "'abc'"
const str3 = '"abc"'

try {
    JSON.parse(str1)    
} catch (error){
console.log(error)
    //JavaScriptで文字列型を取り扱う時は、クオーテーションが必要だから
}
try {
    JSON.parse(str2)
} catch (error){
    console.log('JSON.parseがうまく実行出来ません。コメントを参照してください。')
}
    try {
    JSON.parse(str3)
} catch (error){
    console.log('JSON.parseがうまく実行出来ません。コメントを参照してください。')
    }
    