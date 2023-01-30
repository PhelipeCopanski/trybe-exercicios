const data = require('./data');

// const expectedResult = [ 'Fundação', 'Duna' ];

// 3 - Faça uma função que retorne os nomes dos livros, dado o ano de nascimento das pessoas autoras.

const booksByAuthorBirthYear = (birthYear) => {
  const booksByYear = data.filter((book) => book.author.birthYear === birthYear);
  return booksByYear.map((bookByYear) => bookByYear.name);
}
const result = booksByAuthorBirthYear(1920);

console.log(result);