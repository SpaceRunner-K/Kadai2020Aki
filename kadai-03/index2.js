const max = parseInt(process.argv[2])
//3の倍数と3のつく数字
for(let n=1 ;n<=max;n++){
    if(n%3 === 0 || String(n).indexOf('3') >=0){
        console.log(n +' こんばんは')
    }else {
        console.log(n)
    }
}