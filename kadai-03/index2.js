const max = parseInt(process.argv[2])

for(let n=1 ;n<=max;n++){
    if(n%3 === 0){
        console.log('こんばんは')
    }else {
        console.log(n)
    }
}