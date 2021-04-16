// CODEWARS 6KYU: IP VALIDATION
// INSTRUCTIONS:
// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Input to the function is guaranteed to be a single string.

// Examples
// Valid inputs:

// 1.2.3.4
// 123.45.67.89
// Invalid inputs:

// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Note that leading zeros (e.g. 01.02.03.04) are considered invalid.


// SOLUTION

function isValidIP(str) {
    return str.split('.').filter(checkValidNum).length === 4;
  }
 
 function checkValidNum(num){
   //check for zero in first position
   const zeroFirst = /^0/.test(num)
   //check for zero in  first position but followed by another non-zero digit, or if num is 2 zeroes or 3 zeroes
  if( zeroFirst && +num !== 0 || num === '00' || num === '000' ) return false
  //REGEX: ^ -defines the starting position
  //\d : find any digit
  //{1,3} : number should include 1 to 3 digits
  //$ : -defines the end position 
   
   return (+num>=0) && (+num<=255) && (/^\d{1,3}$/.test(num));
   
   //console.log(zeroFirst)
 }

 //OTHER SOLUTION
 const isValidIP = str=> {
    let params = str.split('.');
    return params.length === 4 &&
        params.every(param=>Number(param) < 256 && String(Number(param)) === param);
};