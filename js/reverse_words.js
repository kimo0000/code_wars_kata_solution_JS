function reverseWords(str) {
if(!str.length) return "This Is A Empty String";

// Methode 1:
// return str.split('')
//           .reverse()
//           .join('')
//           .split(' ')
//           .reverse()
//           .join(' ')

// Methode 2:
// let final = "";
// for (let i = 0; i < str.length; i++) {
//     final += str[i];
// }
// return final.split('').reverse().join('').split(' ').reverse().join(' ');

// Methode 3:
return str.split(' ').map(el => el.split('').reverse().join('')).join(' ')
}

console.log(reverseWords("double  spaced  words"));

console.log("hello");