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


const person ={
    name:'kamata',
    age:35, 
    'has-cart':true
    address:{
        prefecture: 'Shiga';
        country:'Japan';
    }
}

//呼び出し2種類
console.log(person.age)
console.log(person['age'])
//has-catは[]でくくらないとアクセス出来ない

Object.key(cat)//キーのみを配列として取得
Object.values(cat)//値を配列として取得

const a = {x:1,y: 2}
const b = a //複製
b.x = 10
console.log(b.x)
console.log(a.x) //値がb.xと値が同期されているので同じになる