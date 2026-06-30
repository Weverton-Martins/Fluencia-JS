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
const locateBoolean = (item, array ) => array.includes(item)

console.log(locateBoolean('pera', ['banana', 'uva', 'pera']))
/*
  06

  - Crie uma função que retorna a concatenação de 2 arrays, passados como
    argumentos em sua invocação;
*/
const concatArrays = (lista1, lista2) => lista1.concat(lista2)

console.log(concatArrays([1, 2, 3], [4, 5, 6]))
/*
  07

  - Crie uma função que retorna o array passado como argumento em sua invocação,
    mas com o último item removido.
*/
const popArray = array => {
  array.pop()
  return array
}

console.log(popArray([1, 2, 3, 4, 5]))
/*
  08

  - Crie uma função que retorna se o valor passado como argumento em sua
    invocação é null.
*/

const nullFunction = value => value === null

console.log(nullFunction(null))
/*
  09

  - Crie uma função que apenas invoca uma função de callback recebida por
    parâmetro;
  - Crie outra função que apenas exibe seu nome no console;
  - Invoque a função que recebe um callback por parâmetro, passando como
    argumento a função que exibe seu nome no console e veja se o nome realmente
    foi exibido.
*/

const myName = callback =>{
  callback()
}

const name = () => {
  console.log('Weverton Henrique')
}

myName(name)
/*
  10

  - Crie uma função que invoca uma função de callback recebida por parâmetro.
    A invocação da função recebida por parâmetro deve receber um valor como
    argumento;
  - Crie uma função que retorna o triplo de um número recebido por parâmetro;
  - Faça com que a invocação da função descrita no 1º item deste exercício (10)
    resulte no triplo de 33.
*/

const myFunc = callback =>{
  const value = 33

  callback(value)
}

const tripleNumber = number => {console.log(number *3)}

myFunc(tripleNumber)
/*
  11

  - Utilizando um forEach, baseado no array "numbers", a cada iteração, exiba a
    mensagem abaixo no console, substituindo os "X" pelas informações corretas;
  
  "O Xº item do array [X, X, X] é X."
*/

const numbers = [1, 2, 3]

const infoNumbers = (item, index, array) => {
  console.log(`O ${index+1}º item do array [${array.join(', ')}] é ${item}.`)
}

numbers.forEach(infoNumbers)
/*
  12

  - Converta o for loop abaixo em um forEach;
  - Após a conversão, verifique se a cópia do array lettersCopy realmente foi
    criada.
*/

const letters = ['v', 'e', 'p']
let lettersCopy = []

// for (let i = 0; i < letters.length; i++) {
//   lettersCopy.push(letters[i])
// }

letters.forEach(letter =>{
  lettersCopy.push(letter)
})

console.log(lettersCopy)
/*
  13

  - Inclua o markup abaixo em seu index.html;
  - Gere um template HTML com parágrafos. Cada parágrafo deve conter um item do
    array "review";
  - Ao gerar o template, verifique no browser se os parágrafos foram incluídos
    dentro da section vazia do markup abaixo.

  <article>
    <header>
      <h1>Sobre "Jurassic Park"</h1>
    </header>

    <section data-js="section"></section>
  </article>
*/

const section = document.querySelector('[data-js="section"]')

const review = [
  'Eu sempre adorei o filme e quando descobri que tinha o livro também fiquei doido. Demorei um pouco para comprar, mas valeu a pena.',
  'O primeiro filme foi baseado nesse livro, porém o livro (como sempre) é muito mais completo, com mais detalhes dos dinossauros.',
  'Michael é um ótimo autor, esse sim pesquisa muito antes de escrever um livro, além da história que te prende do início ao fim.',
  'Recomendo esse livro pra quem curte uma boa história de ficção. Apesar de muita gente pensar que o tema está batido, é genial.'
]

let paragraphs = ''

const createParagraphs = index => {
  paragraphs += `<p>${index}</p>`
}

review.forEach(createParagraphs)

section.innerHTML = paragraphs
/*
  14

  - Implemente uma função que retorna uma string com a quantidade de pessoas que curtiram um post, conforme descrito a seguir;
  - A função deve receber por parâmetro um array com os nomes das pessoas que curtiram o post/vídeo/foto;
  - Se o array recebido estiver vazio, a mensagem que a função deve retornar é "Ninguém curtiu isso";
  - Se o array conter apenas um nome, como "Rafael", por exemplo, a mensagem retornada deve ser "Rafael curtiu isso";
  - Se o array conter 2 nomes, a mensagem retornada deve ser
    "NOME_1 e NOME_2 curtiram isso";
  - Se o array conter 3 nomes, a mensagem retornada deve ser
    "NOME_1, NOME_2 e NOME_3 curtiram isso";
  - Se o array conter 4 ou mais nomes, a mensagem retornada deve ser "NOME_1, NOME_2 e mais X pessoas curtiram isso". O "X" deve ser substituído pelo restante da quantidade de pessoas que curtiram o post (além das duas pessoas já mencionadas no início da mensagem).
*/
const peopleLikes = (name = []) =>{
  switch(name.length){
    case 0:
      return 'Ninguém curtiu isso'
    case 1:
      return `${name[0]} curtiu isso`
    case 2:
      return `${name[0]} e ${name[1]} curtiram isso`
    case 3:
      return `${name[0]}, ${name[1]} e ${name[2]} curtiram isso`
    default:
      return `${name[0]}, ${name[1]} e mais ${name.length - 2} pessoas curtiram isso`
      

  }
}

console.log(peopleLikes(['Roger','Weverton', 'João', 'Bruce', 'Ana']))
