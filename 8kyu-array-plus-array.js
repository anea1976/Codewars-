// CODEWARS 8KYU ARRAY PLUS ARRAY
// INSTRUCTIONS:
// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// SOLUTION:
function arrayPlusArray(arr1, arr2) {
    return arr1.map((a, i) => a + arr2[i]).reduce((a,b) => a + b, 0)
  }