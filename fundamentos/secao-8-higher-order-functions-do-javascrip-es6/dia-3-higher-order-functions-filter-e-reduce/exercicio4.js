const data = require('./data');

// const expectedResult = [
//   'Frank Herbert',
//   'George R. R. Martin',
//   'Isaac Asimov',
//   'J. R. R. Tolkien',
// ];

//  4 - Crie um array que possua apenas os nomes de todas as pessoas autoras de ficção científica ou fantasia e ordene por ordem alfabética.

const fantasyOrScienceFictionAuthors = () => {
  const booksFilter = data.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
  const mapBookByNames = booksFilter.map((mapBook) => mapBook.author.name);
  return mapBookByNames.sort();
};

console.log(fantasyOrScienceFictionAuthors());
