// 7KYU CODEWARS - SIMPLE REMOVE DUPLICATES 
// INSTRUCTIONS 
// In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

// // Remove the 3's at indices 0 and 3
// // followed by removing a 4 at index 1
// solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]
// More examples can be found in the test cases.

// Good luck!

// SOLUTIONS:
//1)
function solve(arr){  
  //copy the array using slice() and then reverse the copy  
  let newArr = arr.slice().reverse()
  //use Set() to remove duplicates from the copy
  let removedDubs = new Set(newArr)
  //use the spread operator to convert the Set() object back to an array 
  //reverse the array
 return [...removedDubs].reverse()
}
//2)
function solve(arr){
  return arr.reduceRight((acc, cv)=> {return acc.includes(cv)? acc:[...acc, cv]}, []).reverse()
    }

//3)
function solve (arr){
  let obj = {};
    arr.map(x => {
      obj[arr.lastIndexOf(x)] = x;
       });
  let result = Object.keys(obj);
    return result.map(key=>obj[key]);
            
      }
  
  
  