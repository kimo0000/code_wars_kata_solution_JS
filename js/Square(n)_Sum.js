/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9 because 
1+2+2=9.
*/

function squareSum(numbers) {
// Methode 1:
// return numbers.map(el => Math.pow(el, 2)).reduce((acc, curr) => acc + curr, 0);

// Methode 2:
let sum = 0;
for (const num of numbers) {
    sum += num**2;
}
return sum;

// Methode 3:
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += Math.pow(numbers[i], 2);
// }
// return sum;

// Methode 4:
// let sum = 0;
// let i = 0;
// while(i < numbers.length) {
//     sum += Math.pow(numbers[i], 2);
//     i++;
// }
// return sum;
}

console.log(squareSum([0, 3, 4, 5]));