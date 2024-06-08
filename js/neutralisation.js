/*
Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.
Worked Example
*/

function neutralise(s1, s2) {
// Methode 1:
//   return s1.split('').map((el, i) => el == s2[i] ? el : 0).join('');

// Methode 2:
// let result = "";
// for (let i = 0; i < s1.length; i++) {
//     console.log(s1[i], s2[i]);
//     s1[i] == s2[i] ? result += s1[i] : result += 0;
// }
// return result;

// Methode 3:
return Array(...s1).map((el, i) => el != s2[i] ? 0 : el).join('');
}

console.log(neutralise("++-+-+", "++--++")); // -+-+-+