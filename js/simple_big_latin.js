/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str) {
if(str.includes('?') || str.includes('!')) {
    let ponctuation = str.split(" ").slice(-1).join('');
    return (
      str
        .trim()
        .split(" ")
        .filter((el) => el != "!" && el != "?")
        .map((el) => el.slice(1) + el[0] + "ay")
        .join(" ") + ` ${ponctuation}`
    );
} else {
    return str
      .trim()
      .split(" ")
      .map((el) => el.slice(1) + el[0] + "ay")
      .join(" ");
}
}

console.log(pigIt("Pig latin is cool ?"));