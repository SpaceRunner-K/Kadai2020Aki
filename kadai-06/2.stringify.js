const cat = {
    spercies:"cat",
    name:"Tama"
}
const jsonstring = JSON.stringify(cat)
console.log(jsonstring === '{"species":"cat","name":"Tama"}')

const parsed_cat = JSON.stringify(cat)
console.log(parsed_cat)
console.log(parsed_cat.name)