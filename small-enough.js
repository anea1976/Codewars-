// CODEWARS 8KYU NO LOOPS 1 -SMALL ENOUGH
// INSTRUCTIONS:
// *** No Loops Allowed ***

// You will be given an array (a) and a limit value (limit). You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// Do not use loops. Do not modify input array.

// Looking for more, loop-restrained fun? Check out the other kata in the series:

// https://www.codewars.com/kata/no-loops-2-you-only-need-one

// https://www.codewars.com/kata/no-loops-3-copy-within

// SOLUTION:

function smallEnough(a, limit){
    return a.every(x=> x <= limit)
    }
