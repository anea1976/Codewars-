// DOES MY NUMBER LOOK BIG IN THIS?
// INSTRUCTIONS:
// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

// SOLUTION 1:

function narcissistic(value) {
    const strVal = `${value}` //changes value to string
    const len = strVal.length //gets length of string
     //console.log(strVal)
    //console.log(len)
    //strVal.split('') convert string to array
    //map through each element of the array and 
    //change the array of strings into array of numbers
    //Math.pow(c, len) raise each number to the power of length of array
    //add all numbers raised to power 'len' and then check to see if the sum is equal to original value
    return strVal.split('').map(Number).reduce((acc, c) => acc += Math.pow(c, len), 0) === value
   
    }

    //CLEVER SOLUTION:
    function narcissistic(v){
        return [...s=v+''].reduce((p,c)=>p+c**s.length,0)==v;
     }