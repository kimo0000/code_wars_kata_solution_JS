/*
You are given an odd-length array of integers, in which all of them are the same,
except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

*/

function stray(numbers) {
// Methode 1:
// let counter = new Map();
// for (let i = 0; i < numbers.length; i++) {
//   counter.set(numbers[i], (counter.get(numbers[i])|| 0)+1);
// }

// let result = 0;
// for (const count of counter) {
//     if(count[1] == 1) result = count[0];
// }
// return result;

// Methode 2:
return numbers.reduce((a, b) => a ^ b);
}

console.log(stray([1,1,2]));