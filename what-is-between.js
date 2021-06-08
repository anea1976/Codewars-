// CODEWARS 8KYU - WHAT IS BETWEEN 

// INSTRUCTIONS
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]
// FUNDAMENTALS ALGORITHMS

// SOLUTION 1:
function between(a, b) {
    let arr =[]
    for (let i=a; i<=b; i++){
     arr.push(i)
    }
    return arr
  }

// SOLUTION 2:

function between(a, b) {
    return Array((b+1)-a).fill(0).map((x,i)=> a+i)
  }

  //SOLUTIONS FROM OTHERS:
  function between(a, b) {
    return Array.from( {length: (b-a+1)}, (v, i) => a+i );
  }