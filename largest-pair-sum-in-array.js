// 7KYU CODEWARS - LARGEST PAIR SUM IN ARRAY
// INSTRUCTIONS:
// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

//SOLUTION:
function largestPairSum(numbers)
{
  return numbers.sort((a,b)=> a-b),
    numbers[numbers.length-1] + numbers[numbers.length-2]
}