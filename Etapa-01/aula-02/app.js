//strings
console.log('Hello, word!')

const email1 = 'weverton@gmail.com'
console.log(email1)

//concatenação strings
 const firstName = 'Weverton'
 const lastName = 'Snoll'
 const fullName = firstName + ' ' + lastName
 console.log(fullName)

//acessando caracteres
console.log(fullName[0])

//comprimento de uma strings
console.log(fullName.length)

//métodos de strings
console.log(fullName.toUpperCase())
const result = fullName.toLowerCase()
console.log(result, fullName)

const index = email1.indexOf('@')
console.log(index)

//métodos comuns de strings
const email = 'jhonsnoll@gmail.com.br' 

const lastIndexOfA = email.lastIndexOf('o')
console.log(lastIndexOfA)

const slice = email.slice(0, 9)
console.log(slice)

const emailReplace = email.replace('jhonsnoll', 'legolasbelmonth')
console.log(emailReplace, email)

const postTitle = 'É boalacha ou biscoito?'
const postAuthor = 'Matheus Saad'
const postComments = 15

// usando concatenação
// const postMensagem = 'O post "'+ postTitle + ' " do '+ postAuthor + 'está com '+ postComments + ' comentarios.'

// usando template Strings
const postMensagem = `O post "${postTitle}", do ${postAuthor}, tem ${postComments} comentarios`

// criando templates HTML
const html = `
    <h2>${postTitle}</h2>
    <p>${postAuthor}</p>
    <span> Este post ${postComments}</span>
`