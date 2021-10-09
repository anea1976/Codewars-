// CODEWARS 7KYU - COUNTER OF NEIGHBOR ONES
//INSTRUCTIONS
// Task
// Tranform of input array of zeros and ones to array in which counts number of continuous ones. If there is none, return an empty array

// Example
// [1, 1, 1, 0, 1] -> [3,1]
// [1, 1, 1, 1, 1] -> [5]
// [0, 0, 0, 0, 0] -> []
// FUNDAMENTALS 
//SOLUTION
function onesCounter(input) {
    if (input.indexOf(1)===-1) return []
    let map=[]
    let counter=0
       for(let i=0; i<input.length; i++){    
      if(input[i]===1){
        counter++;
         }else{  
  //           newCounter=counter
  //        map.push(newCounter)
           map.push(counter)
           counter=0
           
      }
     
    }
     
       map.push(counter)
    return map.filter(el=>el!==0)
    
  }

  //   2)
function onesCounter(input) {
  const arr = [];
  let counter = 0;
  for(let num of input) {
   if(num === 1) counter ++;
   else if(counter !== 0){
     arr.push(counter);
     counter = 0;
     }
  }
  if(counter) arr.push(counter);
  return arr;
}




  
  