/*
For every good kata idea there seem to be quite a few bad ones!
In this kata you need to check the provided array (x) for good ideas
'good' and bad ideas 'bad'. If there are one or two good ideas,
return 'Publish!', if there are more than 2 return 'I smell a series!'.
If there are no good ideas, as is often the case, return 'Fail!'.
*/

function well(x) {
// Methode 1:
// let goodLength = x.filter(el => el == "good").length;
// return goodLength == 0
//   ? "Fail!"
//   : goodLength <= 2
//   ? "Publish!"
//   : "I smell a series!";
}

console.log(well(["bad", "bad", "bad", "good", "good", "good"]));