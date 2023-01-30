const data = require('./dataDesafio');

// const expectedResult = 4311757;

// 2 - Calcule a área total de todos os países.

const getTotalArea = () => {
  return data.reduce((acc, curr) => acc + curr.area, 0);
};

console.log(getTotalArea());