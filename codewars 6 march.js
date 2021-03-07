//SUM OF ARRAY WITHOUT HIGHEST AND LOWEST NUMBER


// Sum all the numbers of the array(in F# and Haskell you get a list) except the highest and the lowest element(the value, not the index!).
// (The highest / lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

// Example:

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// If array is empty, null or None, or if only 1 Element exists, return 0.
// Note: In C++ instead null an empty vector is used.In C there is no null. ; -)

function sumArray(array) {
    if (array === null || array.length === 0 || array.length === 1) {
        return 0
    } else {
        let max = Math.max(...array)
        let min = Math.min(...array)
        return (array.reduce((acc, c) => acc + c, 0) - max - min)
    }
}


// Take an Arrow to the knee, Functionally (Convert a number to an ascii Character)
// Arrow style Functions
// Come here to practice the Arrow style functions Not much else to say good luck!
// Details
// You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

// Examples
// These are example of how to convert a number to an ascii Character:
// Javascript => String.fromCharCode(97) // a
// C# => Tools.FromCharCode(97) // a

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

var ArrowFunc = function (arr) {
    return arr.map(num => String.fromCharCode(num)).join(''); //Complete this function
}

// SUM MIXED ARRAY
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
function sumMix(x) {
    return x.map(Number).reduce((acc, c) => acc + c, 0)
}