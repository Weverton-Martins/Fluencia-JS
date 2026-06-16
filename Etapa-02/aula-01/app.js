// for loop
const names = ['Ze', 'João', 'Maria', 'Tadeu']

 for(let i = 0; i < names.length; i++ ){
    const HTMLtemplates = `<p>${names[i]}</p>`
    console.log(HTMLtemplates)
}

//  while loop 
const deuses = ['Thor', 'Odin', 'Loki', 'Quin']
let i = 0

while(i < deuses.length){
    console.log(deuses[i])
    i++
}