/*
Write a function that takes in a string of one or more words,
and returns the same string, but with all words that have
five or more letters reversed (Just like the name of this
Kata). Strings passed in will consist of only letters
and spaces. Spaces will be included only when more than
one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
*/

function spinWords(string) {
// Methode 1:
// return string.split(' ').map(el => el.length > 4 ? el.split('').reverse().join('') : el).join(' ');

// Methode 2:
return string.replace(/\w{5,}/ig, (w) => w.split('').reverse().join(''))
}

console.log(spinWords("Hey fellow warriors"));


