// CODEWARS 8KYU -COMPARE WITHIN MARGIN
// INSTRUCTIONS 


// SOLUTION:
// If margin is not given, treat it as zero.

// Example: if a = 3, b = 5 and the margin = 3, since a and b are no more than 3 apart, close_compare should return 0. Otherwise, if instead margin = 0, a is lower than b and close_compare should return -1.

// Assume: margin >= 0

// Tip: Some languages have a way to make arguments optional.

// FUNDAMENTALS

//SOLUTION:
function closeCompare(a, b, margin) {
    return Math.abs(a - b) <= margin ? 0 : a > b ? 1 : a === b ? 0 : -1;
}