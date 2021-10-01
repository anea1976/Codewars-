// 6KYU CODEWARS - CamelCase METHOD 

// INSTRUCTIONS: 
// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// SOLUTIONS:
//1)
String.prototype.camelCase=function(str){
  
  return this.split(' ').map(word => word.charAt().toUpperCase()+ word.slice(1)).join('')
  
}


//   2)

String.prototype.camelCase = function() {
  if (typeof this !== 'string' || !this.length) return '';
  
  return this
    .trim()
    .split(' ')
    .map(w => `${w[0].toUpperCase()}${w.toLowerCase().slice(1)}`)
    .join('');
}