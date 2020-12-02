const str1 = "abc"
const str2 = "'abc'"
const str3 = '"abc"'
const str4 = '{"a":undefined}'
const str5 = '{"a": 123}'
const str6 = '{a: 123}'
const str7 = '{"func":()=>console.log("Hi!")}'
try {
    JSON.parse(str1)    
} catch (error){
console.log(error)
    //JavaScriptで文字列型を取り扱う時のクオーテーションとJSONのクオーテーションの2つが必要だから。
}
try {
    JSON.parse(str2)
} catch (error){
    console.log(error)
    //JSONで文字列を扱う時は、シングルクオーテーションではなくダブルクオーテーションが必要
}
    try {
    JSON.parse(str3)
} catch (error){
    console.log(error)
}
    try {
    JSON.parse(str4)
} catch (error){
    console.log(error)
    //underfindは値として使えないから
    }
     try {
    JSON.parse(str5)
} catch (error){
    console.log(error)
    }
    try {
    JSON.parse(str6)
} catch (error){
    console.log(error)
    //文字列を扱う時はダブルクオーテーションを使う
    }
    try {
    JSON.parse(str7)
} catch (error){
    console.log(error)
    //JSPNで関数は扱えないため
    }
