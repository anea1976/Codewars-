// 7KYU CODEWARS - CHARACTER COUNTER

// You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

// For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

// The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

// Examples
// "abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.

// "abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
// "123abc!" is a valid word because all of the characters only appear once in the word.

// ALGORITHMS STRINGS BASIC LANGUAGE FEATURES FUNDAMENTALS

// SOLUTION:
//1)
function validateWord(s)
{
  let hash = {}
  let newStr = s.toLowerCase()
  
  for (let char of newStr ){
   if(hash[char]){
     hash[char]++
   } else{
     hash[char] = 1
   }
      
  }
  return Object.values(hash).every((el,i,arr)=> el === arr[0])
}
//2)
function validateWord(s){
    let str = s.toLowerCase();
    let arr = str.split('');
    let arr1 = [];
    for (let i = 0; i < arr.length; i++){
      let arr2 = arr.filter(j => j === arr[i]);
     arr1.push(arr2.length); 
    }
    return arr1.every(el => arr1[0] === el);
  }