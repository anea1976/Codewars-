// 7KYU CODEWARS - ALTERNATE CAPITALIZATION 
// INSTRUCTIONS 
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

// SOLUTION
//1)
function capitalize(s){
  
  let wordArr = s.split('')
 let  evenIdxCaps = wordArr.map((el,idx)=> idx% 2 ===0? el.toUpperCase(): el).join('');
   let  oddIdxCaps = wordArr.map((x,idx)=> idx% 2 !==0? x.toUpperCase(): x).join('');
  
 return [evenIdxCaps, oddIdxCaps]
};


//OTHERS
//2)
function capitalize(s){
  return [[...s].map((x,i) => i % 2 == 0 ? x.toUpperCase() : x).join(''),
          [...s].map((x,i) => i % 2 != 0 ? x.toUpperCase() : x).join('')]
}

