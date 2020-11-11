//3000ミリ秒（3秒）待ってHello!と表⽰する
setTimeout(
    ()=>{console.log('3秒たちました')},
    3000
)

//1000ミリ秒(1秒)ごとにHello!と表⽰し続ける
setInterval(()=>{
    console.log('1秒たちました')},1000)