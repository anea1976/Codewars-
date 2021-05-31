// CODEWARS 8KYU - TWICE AS OLD

// INSTRUCTIONS:

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

// SOLUTION:  

function twiceAsOld(dadY, sonY) {
    return Math.abs(dadY - (sonY * 2))
  }
