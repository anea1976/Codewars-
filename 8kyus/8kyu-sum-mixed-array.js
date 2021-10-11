// 8KYU CODEWARS - SUM MIXED ARRAY
// INSTRUCTIONS
//  Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// FUNDAMENTALS STRINGS NUMBERS ARRAYS

// SOLUTIONS:
function sumMix(x){
    return x.map(el=> +el).reduce((a,b)=> a+b)
    }