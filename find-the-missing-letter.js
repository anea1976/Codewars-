// CODEWARS 6KYU FIND THE MISSING LETTER 
// INSTRUCTIONS:
// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

//SOLUTION 1:
function findMissingLetter(array)
{ for (let i = 0; i < array.length-1; i++ ){
  
  //const currValue = array[i].charCodeAt(0);
  //const nextValue = array[i + 1].charCodeAt(0)
  console.log(currValue)
   console.log(nextValue)
  if(currValue + 1 !== nextValue){
    return String.fromCharCode(currValue + 1)
  }
  
}
}

//CLEVER SOLUTION

function findMissingLetter(array)

{
  let i = array[0].charCodeAt(0);
  return String.fromCharCode(array.find(el => el.charCodeAt(0) != i++).charCodeAt(0) - 1);
}