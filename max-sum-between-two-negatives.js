// CODEWARS 7KYU MAX SUM BETWEEN TWO NEGATIVES
// INSTRUCTIONS:
// You have a list of integers. The task is to return the maximum sum of the elements located between two negative elements, or -1, Nothing, or a similar empty value, if there is no such sum. No negative element should be present in this sum.

// Example:

// [4, -1, 6, -2, 3, 5, -7, 7] -> 8
//      ^      ^         ^
// Not 14, because -2 is between -1 and -7, and not 6 but 8, because 8 is bigger.

SOLUTION 1:
function maxSumBetweenTwoNegatives(a) {
    let negNums= 0;
    let sum =0;
    let highestSum=0
    
    for (let num of a)
      if (num < 0){
        negNums++
        if(negNums >1 ){
          highestSum = Math.max(highestSum, sum)
          sum = 0
        }
      } else{
        if(negNums > 0 ){
          sum += num
        }
      }
    return negNums > 1 ? highestSum : -1
  }

  SOLUTION 2:
  function maxSumBetweenTwoNegatives(a) {
  
    let neg = a.map((e,i)=>e<0 ? i : '').filter(e=>typeof e =='number'), 
        max=0;
    
    if(neg.length<2)return -1
    
    for(let i =0 ; i < neg.length-1 ; i++){
      max = Math.max(max, a.slice(neg[i]+1,neg[i+1]).reduce((x,y)=>x+y,0))
    }
    
    return max
    
  }  
