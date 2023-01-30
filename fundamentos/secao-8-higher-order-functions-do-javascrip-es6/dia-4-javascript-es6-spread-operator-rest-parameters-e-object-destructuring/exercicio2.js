const sum = (...parameters) => {
  let total = 0;
  parameters.forEach((parameter) => {
    total += parameter;
  });
  return total;
};

console.log(sum(4, 5, 6));