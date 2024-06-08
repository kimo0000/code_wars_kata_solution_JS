/* Complete the function that takes a non-negative
integer n as input, and returns a list of all the powers
of 2 with the exponent ranging from 0 to n ( inclusive ). */


function powerOfTwo(n) {
// Methode 1:
// let final = [];
// for (let i = 0; i <= n; i++) {
//     console.log(i);
//     final.push(Math.pow(2, i));
// }
// return final;

// Methode 2:
return Array.from(Array(n+1).keys()).map(el => 2**el);
}

console.log(powerOfTwo(4));