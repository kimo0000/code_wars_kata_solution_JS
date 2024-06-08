/*
Given a number n, return the number of positive odd numbers below n, <EASY!>
*/

const addCount = (n) => {
  // Methode 1:
  let final = [];
  for (let i = 0; i < n; i++) {
    if (i % 2) {
      final.push(i);
    }
  }
  return final.length;

  // Methode 2:
  // return Array.from(
  //   Array(n)
  //     .keys()
  //     .filter((el) => el % 2 == 0))
  //     .length;

  // Methode 3:
  // return parseInt(n / 2);
};

console.log(addCount(15));
