// 8KYU CODEWARS - AREA OF A SQUARE
// INSTRUCTIONS:
// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

// PUZZLES GAMES

//SOLUTION
function squareArea(A){

    let radius = (A * 360)/ (90 *2*Math.PI) 
     
     let sqArea = (Math.pow(radius, 2)).toFixed(2)
    return Number(sqArea)
     
     
     
   }