// 8KYU CODEWARS - POWER 
// INSTRUCTIONS 
// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

// Examples
// numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10,6) // -> 1000000
// Note: Math.pow and some other Math functions like eval() and ** are disabled.

// FUNDAMENTALS NUMBERS
//SOLUTIONS:
//1)
function numberToPower(number, power){
    let newNumber=1
    for(let i=0;i<power;i++){
      newNumber*=number
    }
    return newNumber
  }
  //2)
  const numberToPower = (number,power) => power == 0 ? 1 : Array.from({length: power}, (v,i) => number).reduce((a,b) => a * b)