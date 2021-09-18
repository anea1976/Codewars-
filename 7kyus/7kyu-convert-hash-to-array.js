
// 7KYU CODEWARS - CONVERT HASH TO AN ARRAY

// Convert a hash into an array. Nothing more, Nothing less.

//   {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

//   [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
// Good Luck!

// SOLUTION

function convertHashToArray(hash) {
    let arr = [];
    Object.keys(hash).sort().map(item => arr.push([item,hash[item]]));
    return arr;
  }