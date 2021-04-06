// CODEWARS 7KYU- WRITE SHORTEST FUNCTION TO CALCULATE AVERAGE OF ARRAY 
// INSTRUCTIONS:
// Given an array of integers, calculate the Average of these numbers.

// Main challenge is to write shortest and compact function for it.

// For example: var a = [0, 1, 2];
// avg(a) // output should be 1
// Output of function will be also checked in tests, however most important is to write the shortest possible function (code length < 100). Input will always be valid.

SOLUTION 1:
function avg(a){
    return a.reduce((b,c) => (b+c),0)/a.length;
  }

  SOLUTION 2:
  avg=(a)=>eval(a.join('+'))/a.length;