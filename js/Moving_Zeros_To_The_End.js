/*
Write an algorithm that takes an array and moves all of the zeros to the end,
preserving the order of the other elements.
*/

function moveZeros(arr) {
// Methode 1:
// let numZero = arr.filter((el) => el === 0);
// let otherNum = arr.filter((el) => el !== 0);
// return otherNum.concat(numZero);

// Methode 2:
let arrZero = [];
let otherNum = [];
for (let i = 0; i < arr.length; i++) {
    arr[i] === 0 ? arrZero.push(arr[i]) : otherNum.push(arr[i]);
}
return [...otherNum, ...arrZero];
}

console.log(moveZeros(['a', 'b', null, 'c', 1, 1, 9, {}, 9, +0, +0, +0, false, +0, +0, []]));