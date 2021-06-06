// CODEWARS 8KYU - REVERSED SEQUENCE

// INSTRUCTIONS:
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// FUNDAMENTALS

// SOLUTION:
const reverseSeq = n => {
    return [...Array(n+1).keys()].reverse().slice(0,-1);
  };
  //CLEVER SOLUTIONS:
  const reverseSeq = n => {
    return Array(n).fill(0).map((e, i) => n - i );
  };