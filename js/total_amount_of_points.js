/*
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

function points(games) {
// Methode 1:
//   let x = games.map(el => +el.split(':')[0]);
//   let y = games.map(el => +el.split(':')[1]);
//   let result = 0;
//   for (let i = 0; i < x.length; i++) {
//     console.log(x[i], y[i]);
//     if (x[i] > y[i]) {
//         result += 3;
//     } else if(x[i] == y[i]) {
//         result += 1;
//     } else {
//         result += 0;
//     }
//   }
//   return result;

// Methode 2:
return games
  .map((el) =>
    +el.split(":")[0] > +el.split(":")[1]
      ? 3
      : +el.split(":")[0] == +el.split(":")[1]
      ? 1
      : 0
  )
  .reduce((acc, curr) => acc + curr, 0);
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);