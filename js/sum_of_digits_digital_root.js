/*
Digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has more than one digit,
continue reducing in this way until a single-digit number is produced.
The input will be a non-negative integer.
Examples
16  -->  1 + 6 = 7
942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

function digitalRoot(n) {
// Methode 1:
// if(n < 10) return n;
// let result = 0;
// String(n).split('').map(el => result += +el);
// return result >= 10 ? digitalRoot(result) : result;

// Methode 2:
// if(n < 10) return n;
// let result = n.toString().split('').map(el => +el).reduce((acc, curr) => acc + curr, 0);
// return result >= 10 ? digitalRoot(result) : result;

// Methode 3:
// if(n < 10) return n;
// let nStr = n.toString();
// let result = 0;
// for (let i = 0; i < nStr.length; i++) {
//     result += Number(nStr[i]);
// }
// return result >= 10 ? digitalRoot(result) : result;

// Methode 4:
let numStr = n.toString();
let result = 0;
Array.from(Array(...numStr)).map((el, i, arr) => result += +arr[i]);
return result >= 10 ? digitalRoot(result) : result;
}


console.log(digitalRoot(955));