// 6KYU CODEWARS - FIND THE PARITY OUTLIER 
// INSTRUCTIONS 
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)
// ALGORITHMS

//SOLUTIONS:
//1)
function findOutlier(integers){
  let evenArr = integers.filter(x => x % 2 === 0 )
  let oddArr = integers.filter(x => x % 2  !== 0)
  return oddArr.length === 1? oddArr[0] : evenArr[0];
}

//OTHERS
//2)
function findOutlier(integers){
  return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
}
function even(num){
  return (num % 2 == 0);
}
function odd(num){
  return !even(num)
}

// 3)

function findOutlier(int){
  var evens=[],odds=[];
  int.forEach(function(num){num% 2 !=0? odds.push(num):evens.push(num) });
  return odds.length>1? evens[0]: odds[0];
  }