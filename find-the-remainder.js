// CODEWARS 8KYU: FIND THE REMAINDER
// INSTRUCTIONS:
// Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number. Division by zero should return NaN (in C#, throw a new DivideByZeroException instead). Arguments will both be integers.
// SOLUTION 1

function remainder(a, b){
    if(a===0 || b===0){return NaN}
    return Math.max(a, b) % Math.min(a,b)
    
  }

//   SOLUTION 2:
function remainder(a, b){
    return (a > b) ? a % b : b % a;
  }