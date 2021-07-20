// 7kYU CODEWARS - REMOVE CONSECUTIVE DUPLICATE WORDS
// INSTRUCTIONS:
// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta" 

// SOLUTIONS:
//1)
function removeConsecutiveDuplicates(s) { 
  return s.split(' ').filter((el, i, arr) =>  el !== arr[i+1] ).join(' ')
}


