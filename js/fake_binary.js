/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

function fakeBin(x) {
// Methode 1:
// return x.split('').map(el => +el <= 4 ? 0 : 1).join('');

// Methode 2:
return x.replace(/[1-4]/ig, "0").replace(/[5-9]/ig, "1") 
}

console.log(fakeBin("45385593107843568")); // 01011110001100111