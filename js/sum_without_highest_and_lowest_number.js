/*
Sum all the numbers of a given array ( cq. list ), except the highest
and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge,
even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array,
or the given array is an empty list or a list with only 1 element, return 0.
*/

function sumArray(array) {
// Methode 1:
if(array == null) return 0;
if(array.length <= 1) return 0;
let arraySorted = array.sort((a,b) => a - b);
let result = 0;
for (let i = 1; i < arraySorted.length-1; i++) {
  result += arraySorted[i];
}
return result;

// Methode 2:
// if(array == null) return 0;
// if (array.length <= 1) return 0;
// let arrayFiltred = array.filter(
//   (el) => el != Math.min(...array) && el != Math.max(...array)
// );
// return arrayFiltred.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray(null));