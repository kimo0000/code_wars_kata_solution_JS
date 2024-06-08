/* 
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

function findOdd(A) {
// Methode 1:
// let counter = new Map();
// for (const num of A) {
//     counter.set(num, (counter.get(num) || 0) + 1);
// }

// let result;
// for (const key of counter) {
//     key[1] % 2 != 0 ? result = key[0] : "";
// }
// return result;

// Methjode 2:
// return A.find((item) => A.filter(el => el == item).length % 2);

// Methode 3:
// let obj = {};
// for (const num of A) {
//     num in obj ? obj[num] += 1 : obj[num] = 1;
// } 

// let result = "";
// for (const key in obj) {
//     obj[key] % 2 != 0 ? result = +key : result;
// }
// return result;
}

console.log(findOdd([1,1,2,2,1]));

let a = 10;
let b = 30;
let c = 20;

