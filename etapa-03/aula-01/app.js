// Function declaration 
function sayHi(){
    console.log('Oi')
}

// Function expression 
const showFood = function(){
    console.log('Pizza')
}

sayHi()
sayHi()

showFood()
showFood()

// Argumentos, parâmetros e default parameters
const myFunc = function(name = 'Tony', lastName = 'Stark'){
    console.log(`Oi, ${name} ${lastName}`)

}
// Pra precaver o undefinned passamos uma variavel padrão
myFunc()
myFunc('Bruce', 'Wayne')

// Retornando valores

const double = function(number){
    return number * 2
}

const result = double(3)

const showResult = function(value){
    return `O resultado é ${value}`
}
console.log(showResult(result))