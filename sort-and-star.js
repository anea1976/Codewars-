// Codewars 8kyu SORT AND STAR
// INSTRUCTONS:
// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

SOLUTION 1:

function twoSort(s) {
    return s.sort((a,b) => a<b? -1: 1)[0].split('').join('***')  
 }

 CLEVER SOLUTION:
 const twoSort = s => [...s.sort()[0]].join('***');