let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for(let index = 0; index < numbers.length; index++){
    soma = soma + numbers[index]
};

let mediaAritmética = soma / numbers.length;

console.log(mediaAritmética);