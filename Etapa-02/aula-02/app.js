// if, else e else if statements
const age = 19

if(age >= 18){
    console.log('Você é maior de idade!')
}else{
    console.log('Você é menor de idade!')
}

const array = ['Homer', 'Marge', 'Bart', 'Lisa']

if(array.length > 4){
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