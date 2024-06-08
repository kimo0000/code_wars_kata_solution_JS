/*
Given two integers a and b, which can be positive or negative,
find the sum of all the integers between and including them and return it.
If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

function getSum(a, b) {
// Methode 1:
// if(a == b) return a | b;
// let sortedArr = [a, b].sort((a, b) => a - b);
// let newArr = [];
// for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
//   newArr.push(i);
// }
// return newArr.reduce((acc, curr) => acc + curr);
}

console.log(getSum(2, -1));