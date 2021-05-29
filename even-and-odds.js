// CODEWARS 7KYU - EVEN AND ODDS 

// INSTRUCTIONS:
// This kata is about converting numbers to their binary or hexadecimal representation:

// If a number is even, convert it to binary.
// If a number is odd, convert it to hex.
// FUNDAMENTALS

// SOLUTION:
function evensAndOdds(n){
	return n % 2 === 0 ? n.toString(2): n.toString(16);
}