
// Codewars 8KYU - GET CHARACTER FROM ASCII VALUE
// Write a function which takes a number and returns the corresponding ASCII char for that value.

// Example:

// get_char(65) # => 'A'
// For ASCII table, you can refer to http://www.asciitable.com/
SOLUTION:
function getChar(c){
    return String.fromCharCode(c)
  }