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

//2)
const removeConsecutiveDuplicates = s =>{
  const removed = [];
  s = s.split(' ');
  for (let i = 1; i <= s.length; i++){
    if (s[i] !== s[i-1]){
      removed.push(s[i-1])
    }
  }
  return removed.join(' ')
}
