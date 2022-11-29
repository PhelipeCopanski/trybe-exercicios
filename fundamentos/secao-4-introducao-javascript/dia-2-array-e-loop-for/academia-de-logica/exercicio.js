let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index =0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }

// let soma = 0;
// for (let index =0; index < numbers.length; index += 1) {
//     soma = soma + numbers[index];
// }
// console.log(soma);

// let media = soma / numbers.length;

// console.log(media);

// if (media > 20) {
//     console.log('valor maior que 20');
// } else {
//     console.log('valor menor que 20');
// }


let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);