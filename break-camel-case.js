// 6KYU CODEWARS - BREAL CAMEL CASE 

//  INSTRUCTIONS:

//  Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//SOLUTION

function solution(string) {
    return string.split('').map(x=> x === x.toUpperCase()? ` ${x}`: x).join('')
}

// OTHER SOLUTIONS:
//$ in regex denotes end of line
const solution = string => string.replace(/([A-Z])/g, ' $1');




