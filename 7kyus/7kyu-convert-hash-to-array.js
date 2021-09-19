
// 7KYU CODEWARS - CONVERT HASH TO AN ARRAY

// Convert a hash into an array. Nothing more, Nothing less.

//   {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

//   [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
// Good Luck!

// SOLUTIONS
//1)
function convertHashToArray(hash){
  let array=[]
 for(let elem in hash){
   array.push([elem,hash[elem]])
   
 }
     return array.sort()                      
}


//2)
function convertHashToArray(hash) {
    let arr = [];
    Object.keys(hash).sort().map(item => arr.push([item,hash[item]]));
    return arr;
  }