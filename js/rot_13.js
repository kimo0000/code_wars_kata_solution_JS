/*
ROT13 is a simple letter substitution cipher that replaces a letter
with the letter 13 letters after it in the alphabet. ROT13 is an
example of the Caesar cipher. Create a function that takes a string
and returns the string ciphered with Rot13. If there are numbers or
special characters included in the string, they should be returned as they are.
Only letters from the latin/english alphabet should be shifted, like in the
original Rot13 "implementation".
*/

const codeThirtyn = (message) => {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let code13 = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  let msgUpper = message.toUpperCase();
  let solution = msgUpper.split("")
                         .map((el) => alphabet.indexOf(el) != -1 ? code13[alphabet.indexOf(el)] : el)
                         .join("");

  return solution.split("").map((el, i) => {
      if (message[i] == message[i].toUpperCase()) return el.toUpperCase();
      return el.toLowerCase();
    })
    .join("");
};

console.log(codeThirtyn("Test"));