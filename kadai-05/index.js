const profile = {
    '名前': '非公開',
    '年齢': 19,
    '趣味': 'Photography',
    major :'Literature'
}
const keys = Object.keys(profile)   //profileの一覧を取得しkeysに代入
for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    console.log('私の'+ key +'は、'+ profile[key] +'です。')
}