/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
// Methode 1:
// let result = (s1 + s2).split('').sort();
// return result.filter((el, i, arr) => arr.indexOf(el) == i).join('');

// Methode 2:
// return [...new Set(s1, s2)].sort().join("");

// Methode 3:
// let strs = s1 + s2;
// let counter = new Map();
// for (const letter of strs) {
//     counter.set(letter, (counter.get(letter) || 0) + 1)
// }

// let result = "";
// for (const key of counter) {
//     result += key[0];
// }
// return Array(...result).sort().join("");

// Methode 4:
let letters = s1 + s2;
let result = "";
for (let i = 0; i < letters.length; i++) {
    console.log(letters[i]);
    if(result.includes(letters[i])) {
       continue
    } else {
        result += letters[i];
    }
}
return result.split('').sort().join('');
}

console.log(longest("aretheyhere", "yestheyarehere")); // aehrsty
