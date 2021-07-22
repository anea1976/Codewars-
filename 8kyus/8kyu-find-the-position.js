// CODEWARS 8KYU - FIND THE POSITION 
// INSTRUCTIONS 
// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// This kata is meant for beginners. Rank and upvote to bring it out of beta

// FUNDAMENTALS

// SOLUTION:
function position(letter){
    return `Position of alphabet: ${letter.toLowerCase().charCodeAt()-96}` 
    
    }