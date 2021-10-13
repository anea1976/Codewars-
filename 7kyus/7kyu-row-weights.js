// 7KYU CODEWARS - ROW WEIGHTS 
// INSTRUCTIONS 

// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.


  // SOLUTIONS
//1)
function rowWeights(array){
  let num1 =array.filter((el,i)=> i % 2 ===0  ).reduce((a,b)=> a+b,0)
  let num2 = array.filter((el,i)=> i % 2 !==0  ).reduce((a,b)=> a+b,0)
  return [num1,num2]
}

//2)
function rowWeights(array){
  var arr = [0, 0];
  for (var i = 0; i < array.length; i++) {
    i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
  }
  return arr;
}
