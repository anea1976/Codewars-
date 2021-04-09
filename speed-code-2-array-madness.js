// 8KYU SPEED CODE #2 ARRAY MADNESS
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.
// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
//SOLUTION
function arrayMadness(a, b) {
    let sumSqA= a.map(x=> x**2).reduce((x,y) => x+y,0)
    let sumCubB= b.map(x=> x**3).reduce((x,y) => x+y,0)
    return sumSqA > sumCubB ? true: false;
     
  }