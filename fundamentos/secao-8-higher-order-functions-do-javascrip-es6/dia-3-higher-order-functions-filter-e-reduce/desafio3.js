const data = require('./dataDesafio');

// const expectedResult = {
//   name: 'American Samoa',
//   region: 'Oceania',
//   currencies: [{ code: 'USD', name: 'United States Dollar' }],
//   capital: 'Pago Pago',
//   population: 55197,
//   area: 199
// }

// 🚀 3 - Encontre o país com o maior nome.

const longestName = () => {
  return data.reduce((acc, curr) => acc.name.length > curr.name.length ? acc : curr);
};

console.log(longestName());