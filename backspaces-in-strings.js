// CODEWARS 6KYU BACKSPACES IN STRINGS

// INSTRUCTIONS:

// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""
// ALGORITHMS FUNDAMENTALS STRINGS

// SOLUTION:

function cleanString(s) {
	//need to delete the previous character before every #
  //create empty array to store final elements
  let arr = [];
  //first convert string to array
   s.split('').forEach(el => el !== '#' ? arr.push(el): arr.pop())
  //loop through the arrray, if # is found, remove one item, if not add an item to the final array
  //use join() to convert the final array back to a string
   return arr.join('')
};