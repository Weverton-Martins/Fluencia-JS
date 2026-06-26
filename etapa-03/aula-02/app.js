// função tradicional  

/*
const double = function(number){
    return number * 2
}*/

// Arrow function
const double = (number = 0) => number * 2

const result = double(3)
console.log(`O resultado da multiplicação é: ${result}`)



// FoirEach e callbacks
const myFunc = callback => {
    const value = 77

    callback(value)
}

myFunc(number => {
    console.log(number)
})

const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

const logArrayInfo = (socialNetwork, index, array) => {
    console.log(index, socialNetwork, array)
}

socialNetworks.forEach(logArrayInfo)