// CODEWARS 6KYU - FIND THE ODD INT 
// INSTRUCTIONS:
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// SOLUTION:

function findOdd(A) {
  
    return A.find(item => A.filter(x => x==item).length % 2 !== 0)
  }