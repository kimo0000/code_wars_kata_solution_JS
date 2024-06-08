/*
Given two integer arrays where the second array is a shuffled
duplicate of the first array with one element missing, find the missing element.

Please note, there may be duplicates in the arrays, so checking if a numerical
value exists in one and not the other is not a valid solution.

find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
*/

function findMissing(arr1, arr2) {
// Methode 1:
// let concatArr = arr1.concat(arr2);
// let counter = new Map();
// for (const num of concatArr) {
//     counter.set(num, (counter.get(num) || 0 ) + 1);
// }

// let result = 0;
// for (const val of counter) {
//     if(val[1] % 2) {
//       result = val[0];
//     }
// }
// return result;

// Methode 2:
let result = 0;
let obj = {};
let array = arr1.concat(arr2);
for (let i = 0; i < array.length; i++) {
  if(array[i] in obj) {
     obj[array[i]] += 1;
    } else {
    obj[array[i]] = 1;
  }
}

console.log(obj);
for (const key in obj) {
  if (obj[key] % 2 != 0) {
    result = key;
  }
}
return +result || 0;
}

console.log(findMissing([1, 2, 2, 3], [1, 2, 3]));
