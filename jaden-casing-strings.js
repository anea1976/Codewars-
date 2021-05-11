// CODEWARS 8KYU - JADEN CASING STRINGS 

// INSTRUCTIONS:

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// Link to Jaden's former Twitter account @officialjaden via archive.org

// FUNDAMENTALS STRINGS ARRAYS

// SOLUTION: 

String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(str){
      return str.charAt(0).toUpperCase() + str.slice(1);
    }).join(" ");
  }

//   OTHER SOLUTIONS

String.prototype.toJadenCase = function() {
    return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
      
  };
  // ^ -matches the beginning of the string
  // | -stands for boolean OR
  // \s -matches any whitespace character(spaces,tabs,linebreaks)
  // [] -character set, matches any character in the set
  // a-z  -range, matches any character from a to z
  //the secong arg/callback function will look for any element in the string that matches these regex conditions and capitalize it.


  String.prototype.toJadenCase = function () {
    return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
  };



  
