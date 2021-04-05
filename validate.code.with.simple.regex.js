CODEWARS 8Kyu:VALIDATE CODE WITH SIMPLE REGEX 
INSTRUCTIONS
Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

You can assume the input will always be a number.

SOLUTION 1:
function validateCode (code) {
    return /^[123]/.test(code)
    }

CLEVER SOLUTION:
const validateCode = code => /^[1-3]/g.test(code);