CODEWARS 8KYU: SIMPLE VALIDATION OF A USERNAME WITH REGEX
INSTRUCTIONS:

// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

SOLUTION:

    
    //   - ^     Start from the beginning of the string.
    //   - []    Allow any character specified, including...
    //   - a-z      any letter from a to z,
    //   - 0-9     any number from 0 to 9,
    //   - _       allow underscore.
    //   - {4,16}   Accept 4 to 16 of allowed characters, both numbers included.
    //   - $       End the string right after specified amount of allowed characters is given.
    
  
    
 function validateUsr(username) {
    res =  /^[a-z0-9_]{4,16}$/g
    return res.test(username)
  }