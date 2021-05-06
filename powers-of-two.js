// CODEWARS 8KYU -POWERS OF 2
// INSTRUCTIONS:
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

// SOLUTION 1:
function powersOfTwo(n){
    return Array.from(Array(n+1).keys(), (x,i) => Math.pow(2,i))
    
  }

  //SOLUTION 2:
  function powersOfTwo(n) {
    return [...Array(n + 1)].map((_, i) => 2 ** i)
  }

  //SOLUTION 3:
  function powersOfTwo(n) {
    return Array.from({length: n + 1}, (_, i) => 2 ** i);
  }
