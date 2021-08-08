// CODEWARS 8KYU BILLIARDS TRIANGLE:

// Remember the triangle of balls in billiards? To build a classic triangle (5 levels) you need 15 balls. With 3 balls you can build a 2-level triangle, etc.

// For more examples,

// pyramid(1) == 1

// pyramid(3) == 2

// pyramid(6) == 3

// pyramid(10) == 4

// pyramid(15) == 5
// Write a function that takes number of balls (≥ 1) and calculates how many levels you can build a triangle.
//SOLUTION 1:

function pyramid(balls) {
  
  //each level has one more ball than the previous one
  //eg balls =15 will go: 15-1, then 14-2, then 12 -3, then 9 - 4, then 5-5
  let array = Array(balls).fill().map((_,i) => i + 1)
  //console.log(array)
  
  //While loop
  let i = 0
  while(balls){
    if(balls < array[i]) break
    balls -= array[i]
    i++
  }
  return i 
}

// SOLUTION 2:
//each level is one more ball than the previous one
  //eg balls =15 will go: 15-1, then 14-2, then 12 -3, then 9 - 4, then 5-5
    
  //While loop
  function pyramid(balls) {
  let i = 1, levels =0
  while(balls){
    if(balls < i) break
    levels++
    balls -= i    
    i++
  }
  return levels
}