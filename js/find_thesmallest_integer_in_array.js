/*
Given an array of integers your solution should find the smallest integer.
*/

class SmallestIntegerFinder {
  // Methode 1:
  //   static findSmallestInt = (args) => {
  //     return Math.min(...args);
  //   };

  // Methode 2:
  //   static findSmallestInt = (args) => {
  //     return args.sort((a, b) => a - b)[0];
  //   };

  // Methode 3:
//   static findSmallestInt = (args) => {
//     return args.reduce((acc, curr) => (acc < curr ? acc : curr));
//   };

  // Methode 4:
  static findSmallestInt = (args) => {
    let lower = args[0];
    for (const num in args) {
        lower = lower <= args[num] ? lower : args[num];
    }
    return lower;
  };
}

console.log(SmallestIntegerFinder.findSmallestInt([78, 56, 232, 12, 8]));

