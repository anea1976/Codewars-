// CODEWARS 7KYU EVEN TIMES LAST
// INSTRUCTIONS:
// Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

// FUNDAMENTALS ARRAYS

// SOLUTION 1:
function evenLast(numbers) {
    let sum = 0;
    if ( numbers.length === 0 ) {
      return 0;
    }
    let last = numbers[numbers.length-1];
    for ( let i = 0; i < numbers.length; i++ ) {
        if ( i % 2 === 0 ) {
            sum += numbers[i];
        }
    }
    return sum * last;
 }

//  SOLUTION  2:

const evenLast = ( arr ) => 
      arr.filter((e,i) => i % 2 === 0).reduce((a, b) => a + b, 0) * arr[arr.length-1] || 0

    //   SOLUTION 3:
    

