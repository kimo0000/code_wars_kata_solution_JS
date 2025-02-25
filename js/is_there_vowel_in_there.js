/*
Given an array of numbers, check if any of the numbers are the character codes
 for lower case vowels (a, e, i, o, u).
If they are, change the array value to a string of that vowel.
Return the resulting array.
*/

function isVow(a) {
// Methode 1:
// return a.map(el => {
//     if(el== 97|| el == 101|| el == 105 || el == 111 || el == 117) {
//        return String.fromCodePoint(el);
//     }
//     return el;
// })

// Methode 2:
let result = [];
for (const el of a) {
    console.log(el);
    el == 97 || el == 101 || el == 105 || el == 111 || el == 117
    ? result.push(String.fromCharCode(el))
    : result.push(el);
}
return result;
}

console.log(
  isVow([
    118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
    120, 106,
  ])
);