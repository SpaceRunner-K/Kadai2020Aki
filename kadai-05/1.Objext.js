//オブジェクト
//辞書のようにいろいろなものを入れて呼び出すことも出来る
const obj1 ={}
const obj2 = {
    a:12345,    //数字
    b:'こんにちは'  //文字列
    c:{     //入れ子
        d:true //Boolean
        e: () => {} //関数
    }
}
//呼び出し
console.log(obj2.a)
console.log(obj2.b)
console.log(obj2['d']) //こういう書き方も出来る