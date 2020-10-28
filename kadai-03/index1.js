//課題 (3-1) 性格診断プログラムを作ってみよう
const day = parseInt(progress.argv[2])

if (day % 3 === 0) {
    console.log('あなたは意外とガッツある性格かも知れません')
}　else if (day % 3 === 1) {
    console.log('あなたは意外と几帳面な性格かも知れません')
}　else {
    console.log('あなたは意外と打たれ強い性格かも知れません')
}