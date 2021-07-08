// CODEWARS 6KYU - IS A NUMBER PRIME 
// INSTRUCTIONS:
// Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements

// SOLUTION
function isPrime(num) {

    // Any number less than 2 or negative or not an integer is not  prime.
    if (num < 2 || num != Math.round(num)) {return false}
    
 
    // Set  num to prime from outset and prove whether or not it is prime.
    let isPrime = true;
 
    //Loop from 2 to the square root of num. If num divides exactly by any i, then num is not prime.
    for (let i = 2; i <= Math.sqrt(num); i++) {
       if (num % i == 0) {isPrime = false}
    }
 
    
    return isPrime;
 
 }


