const moduleA = require('.lib/module-a')
const moduleB = require('.lib/module-b')

moduleA()
moduleB()

const fs = require('fs')
fs.writeFileSync('.s/hello.txt', 'こんにちは！')

const file = fs.readFileSync('.hello.txt')

console.log(file.toString())

const cowsay = require('cowsay')
const output = cowsay.say({ text: 'Moo!!' })

console.log(output)

