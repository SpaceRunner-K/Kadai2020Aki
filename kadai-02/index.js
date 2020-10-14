//問1　結合
const firstname = 'Masato'
const familyname = 'Takizawa'

console.log('my name is ' + firstname +' '+ familyname +'.')
//問2　1から10までの和

let n =0
for (let i = 0; i <=10; i++) {
  n = n+i 
}
console.log('1から10までの和は')
console.log(n)

//問3　飼育状況
const dog = true
const cat = false
console.log('犬か猫がいるか')
console.log(dog || cat)
console.log('犬も猫もいるか')
console.log(dog && cat)
console.log('犬も猫もいないか')
console.log(!dog && !cat)
