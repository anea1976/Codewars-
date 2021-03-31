// Codewars 6kyu Stop gninnipS My sdroW!
// INSTRUCTIONS:
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"

// spinWords( "This is a test") => returns "This is a test"

// spinWords( "This is another test" )=> returns "This is rehtona test"

SOLUTION 1:
function spinWords(str){
    //split the string into an array of strings
    //loop over the words 
    //if  a word is 5 or more letters long, reverse
    
    return str.split(' ').map(word => (word.length >= 5)? smallStr(word): word).join(' ');
    
      //.map(word => (word.length >= 5)? word.reverse(): word);
  }
  
  //the function below will split the word grabbed by map into an array of letters, reverse their order and join them back
  function smallStr(shorterStr) {
    return shorterStr.split('').reverse().join('')
  }
  SOLUTION 2:
  function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }