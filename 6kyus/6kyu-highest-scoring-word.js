// 6KYU CODEWARS -HIGHEST SCORING WORD
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

//SOLUTION:
function high(x){
 let wordsArr = x.split(' ')
 let wordScores = wordsArr.map(word => word.split("").map(letter => letter.charCodeAt()-96).reduce((a,b) => a+b))
 return wordsArr[wordScores.indexOf(Math.max(...wordScores))]
}