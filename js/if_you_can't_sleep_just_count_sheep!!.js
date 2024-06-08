/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

var countSheep = function (num) {
// Methode 1:
//   if (num == 0) return "";
//   return Array.from({ length: num }, (_, i) => `${i+1} sheep...`).join('');

// Methode 2:
// let result = '';
// for (let i = 1; i <= num; i++) {
//     console.log(i);
//     result += `${i} sheep...`;
// }
// return result;

// Methode 3:
return [...Array(num).keys()].map((el, i) => i + 1 + "sheep...").join('');
};

console.log(countSheep(3));