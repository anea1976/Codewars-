// CODEWARS 6KYU - SORT THE ODD 
// INSTRUCTIONS: 

// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// SOLUTION:
function sortArray(array) {
    let oddIndexes =  array.map((x, i) => x % 2 !== 0 ? i : '' ).filter(a => a !== '')
    
    let oddNumbers = array.filter(x=> x%2 !== 0).sort((a,b)=>(a-b));
    
    for (let i=0; i< oddIndexes.length; i++){
      array[oddIndexes[i]] = oddNumbers[i]  
    }
    return array
  }

  //CLEVER SOLUTION
  
  function sortArray(array) {
    let odd = array.filter(elem => elem % 2 !== 0).sort((a, b) => a - b);
    return array.map(elem => elem % 2 === 0 ? elem : odd.shift());
  }
