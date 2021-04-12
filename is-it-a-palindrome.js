// 8KYU IS IT A PALINDROME?
// INSTRUCTIONS:
// Write function that checks if a given string (case insensitive) is a palindrome.

// SOLUTION:
function isPalindrome(x) {
    return x.split('').reverse().join('').toLowerCase() == x.toLowerCase() ? true: false;
   }