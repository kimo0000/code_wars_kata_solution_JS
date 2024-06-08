/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
Note you should only return a number, the count of divisors.
The numbers between parentheses are shown only for you to see which
numbers are counted in each case.
*/

function getDivisorsCnt(n) {
// Methode 1:
//   let result = 0;
//   for (let i = 1; i <= (n/2); i++) {
//     if(n % i === 0) {
//        result++
//     }
//   }
// return result+1;

// Methode 2:
// let arr = Array.from({length : n}, (_, i) => i+1);
// let arrayLength = arr.filter(num => n % num == 0).length;
// return arrayLength;

// Methode 3:
// return Array.from(Array(n), (x, i) => i+1).filter(num => n % num == 0).length;

// Methode 4:
let count = 0;

if(n % Math.sqrt(n) === 0) {
count++
}

for (let i = 0; i < Math.sqrt(n); i++) {
    console.log(i);
    if(n % i === 0) {
       count += 2;
    }
}

return count;
}

console.log(getDivisorsCnt(10));