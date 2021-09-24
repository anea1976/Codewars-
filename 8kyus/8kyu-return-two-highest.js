// 8KYU CODEWARS - RETURN TWO HIGHEST VALUES IN LIST
// INSTRUCTIONS:
// n this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []
// FUNDAMENTALS LISTS DATA STRUCTURES
//SOLUTION:
// 1)
function twoHighest(arr) {
    if (arr.length <=1) return arr
    
    let uniqueArr = [...new Set(arr)].sort((a,b) => a-b)
   
    
   return [uniqueArr.pop(), uniqueArr[uniqueArr.length-1]]
  }
//2)
function twoHighest(arr) {
    return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
  }