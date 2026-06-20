// if, else e else if statements
const age = 19

if(age >= 18){
    console.log('Você é maior de idade!')
}else{
    console.log('Você é menor de idade!')
}

const array = ['Homer', 'Marge', 'Bart', 'Lisa']

if(array.length > 3){
    console.log('A lista tem bastante personagens!')
}

const password = 'oi12367991023'

if(password.length >=12){
    console.log('Senha muito forte =)')
}else if(password.length >= 8){
    console.log('Senha forte')
}else{
    console.log('Senha fraca, por favor insira uma senha com no minímo 8 digítos!')
}

// Operadores && e ||

const senha = '1234*'

if(senha.length >= 6 && senha.includes('8')){
    console.log('Senha forte!')
}else if(senha.length <= 5 || senha.includes('*')){
    console.log('Senha poderia ser mais forte!')
}else{
    console.log('Senha fraca!')
}