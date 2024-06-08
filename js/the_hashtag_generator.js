/*
Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

function generateHashtag(str) {
if(str === " " || str == "") return false;
let result = str
  .trim()
  .split(" ")
  .filter((el) => el !== "")
  .map((el) => el[0].toUpperCase() + el.slice(1))
  .join('')
return result.length >= 140 || result.length < 1 ? false : "#" + result;
}

console.log(generateHashtag("a".repeat(140)));
