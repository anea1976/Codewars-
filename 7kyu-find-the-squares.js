// CODEWARS 7KYU - FIND THE SQUARES 
// INSTRUCTIONS:
// Problem
// Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between two consecutive perfect squares, and return these squares as a string in the format "bigger-smaller"

// Examples
// 9  -->  "25-16"
// 5  -->  "9-4"
// 7  -->  "16-9"
// ALGORITHMS MATHEMATICS NUMBERS
// SOLUTION:
const findSquares = num => {
    let firstSq = Array.from({length:num} , (x,i)=> i**2).filter((e,idx,arr)=> e - arr[idx-1] === num)
     let secondSq = Array.from({length:num} , (x,i)=> i**2).filter((e,idx,arr)=> e + num === arr[idx+1])
    
    return `${firstSq}-${secondSq}`
   };