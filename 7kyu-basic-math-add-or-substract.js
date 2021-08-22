// CODEWARS 7KYU BASIC MATHS -ADD OR SUBSTRACT
// INSTRUCTIONS:
// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"
// FUNDAMENTALS STRINGS

// SOLUTION 1:

function calculate(str) {
    //your code here...
    return eval(str.replace(/(plus)/g, '+').replace(/(minus)/g, '-')).toString()
    }

    // SOLUTION 2:

    function calculate(str) {
        let result = '';
        
        result = str.split('plus').join(' ')
                  .split('minus').join(' -')
                  .split(' ').reduce((a,c)=> +a + +c)  
        return result+'';
        }