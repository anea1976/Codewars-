// 6KYU CODEWARS - SORT ARRAYS (IGNORING CASE) 
// INSTRUCTIONS: 

// Sort the given array of strings in alphabetical order, case insensitive. 
// For example:
// ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]
// FUNDAMENTALS ARRAYS SORTING ALGORITHMS

//SOLUTIONS 
//1)
sortme = function( names ){
  return names.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});
}