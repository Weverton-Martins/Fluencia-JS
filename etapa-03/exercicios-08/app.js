/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/
function doubleNumber (number1 = 0, number2 = 0){
    return number1 * number2
}

console.log(doubleNumber(3,3))
/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma
    **function expression** que retorne o resultado da **divisão** entre esses
    2 números.
*/
const secondNumber = function(number1 = 0, number2 = 0){
    return number1 / number2
}

console.log(secondNumber(10, 2))
/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/

function showValue(value = 'Informe um valor!'){
    // console.log(`Esta é a ${value}ª vez que essa string é exibida.`)
}

for(let i = 0; i < 7; i++){
    let counter = i+1
    showValue(counter)
}
/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no
    console;
  - Implemente uma função que retorna um novo array com as strings do array
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da
    função.
*/

const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness']

const newMilleniaWordsUpper = function(array = []){
    newArray = []

    for(let i = 0; i < array.length; i++){
        newArray.push(array[i].toUpperCase())
    }
    return newArray
}
const newUpperCase = newMilleniaWordsUpper(millennialWords)
console.log(newUpperCase)
/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]