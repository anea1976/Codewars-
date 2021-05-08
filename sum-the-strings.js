// CODEWARS 8KYU - SUM THE STRINGS

// INSTRUCTIONS:
// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// Notes:

// SOLUTION:
function sumStr(a,b) {
    let arr = [a,b]
        return arr.map(n=> Number(n)).reduce((x,y)=> x+y,0).toString();
  }

//   SOLUTIONS FROM OTHERS:
//   SOLUTION 2:
  function sumStr(a,b) {
    return String(Number(a)+Number(b));
  }

//   SOLUTION 3:

  function sumStr(a,b) {
    return (+a+ +b)+''  
  }
