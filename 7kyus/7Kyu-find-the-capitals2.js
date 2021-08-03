// 7KYU CODEWARS - FIND THE CAPITALS 2
// INSTRUCTIONS
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// SOLUTIONS
//1)
var capitals = function (word) {
  return word.split('').map((el,i)=>el===el.toUpperCase()? i: '').filter(x => Number.isInteger(x))
};

// OTHERS
