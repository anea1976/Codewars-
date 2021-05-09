// CODEWARS 8KYU - REMOVE DUPLICATES FROM LIST

// INSTRUCTIONS:
// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

// SOLUTION 1:

function distinct(a) {
    return [...new Set(a)];
  }

  // SOLUTION 2:
  function distinct(a) {
    return Array.from(new Set(a));
  }