// 6KYU CODEWARS - BREAK camelCASE 
// INSTRUCTIONS:
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//SOLUTIONS:
// 1)
function solution(string) {
    return string.split('').map(x=> x === x.toUpperCase()? ` ${x}`: x).join('')
}
//2)
const solution = string => {
  return [...string].map((char) => {
    return (char === char.toUpperCase()) ? ` ${char}` : char;
  }).join('');
}

// 3)

function solution(string) {
  return string.replace(/[A-Z]/g, val => ' ' + val)
}
