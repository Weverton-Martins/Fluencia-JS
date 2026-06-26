/*
  01

  - Converta a função abaixo em uma arrow function e utilize-a para exibir um
    valor no console.
*/

const convertToString = value => String(value)

// function convertToString (value) {
//   return String(value)
// }
const result = typeof convertToString(4)

console.log(result)
/*
  02

  - Crie uma função que retorne a quantidade de caracteres que uma string
    recebida por parâmetro possui.
*/

const counterCaracter = string => string.length
    
console.log(counterCaracter('weverton'))
/*
  03

  - Crie uma função que retorne todos os caracteres de uma string em letras
    minúsculas;
  - Utilize a função para exibir a string abaixo no console.

  "CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO"
*/

const stringToLowerCase = string => string.toLowerCase()

console.log(stringToLowerCase('CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO'))
/*
  04

  - Crie uma função que recebe 2 parâmetros: um caractere e uma string;
  - Ao ser invocada, a função deve retornar o index do caractere na string.
*/

const locateCaracter = (string, index) => string.indexOf(index)

console.log(locateCaracter('weverton', 'o'))
/*
  05

  - Crie uma função que, ao ser invocada, retorna um boolean indicando se o item
    passado por argumento existe no array (também passado por argumento).
*/

/*
  06

  - Crie uma função que retorna a concatenação de 2 arrays, passados como
    argumentos em sua invocação;
*/