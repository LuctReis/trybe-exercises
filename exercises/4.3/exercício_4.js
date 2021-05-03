let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for(let index = 0; index < numbers.length; index++){
    soma = soma + numbers[index]
};

let mediaAritmética = soma / numbers.length;

if (mediaAritmética > 20){
    console.log("Valor maior do que 20");
} else {
    console.log("Valor menor ou igual a 20");
};
