// o operador lógico  not (!)

let isUserLoggedIn = false

if(!isUserLoggedIn){
    console.log('Você precisa realizar login para continuar.')
}
console.log(!true)
console.log(!false)

// break e continue 

const scores = [50, 25, 0, 30, 100, 20, 10]

for(let i = 0; i < scores.length; i++){
    if(scores[i] === 0){
        continue
    }
    
    console.log(`Sua pontuação é ${scores[i]}`)

    if(scores[i] === 100){ 
        console.log('Pontuação maxima alcançada')
        break
    }
}

// switch statement 

const grade = 'B'

switch(grade){
    case 'A':
        console.log('Nota tirada é A')
        break
    case 'B':
        console.log('Nota tirada é B')
        break
    case 'C':
        console.log('Nota tirada C')
        break
    case 'D':
        console.log('Nota tirada D')
        break
    case 'E':
        console.log('Nota tirada E')
        break
    default:
        console.log('Nota invalida!')
        break
    



}