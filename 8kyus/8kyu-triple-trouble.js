// 8KYU CODEWARS - TRIPLE TROUBLE
// INSTRUCTIONS:
// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

// PUZZLES

//SOLUTIONS:
//1)
function tripleTrouble(one, two, three){
  //Solution
  let newArr = []
  for(let i=0; i<one.length; i++){
    newArr.push(one[i].concat(two[i],three[i]))
  }
  
  return newArr.join('')
  
 }

 //2)
 function tripleTrouble(one, two, three){
  let x = ''
    for(i = 0; i<one.length; i++) {
      x +=  one[i] + two[i] + three[i]
    }
  return x
 }
 //3)
 const tripleTrouble = (one, two, three) => one.split("").map((letter, index) => letter + two[index] + three[index]).join("");
 

 