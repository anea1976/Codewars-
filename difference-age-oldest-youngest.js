// CODEWARS 8KYU FIND THE DIFFERENCE IN AGE BETWEEN THE OLDEST AND YOUNGEST FAMILY MEMBERS
// INSTRUCTIONS:
// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

// SOLUTION 1:
function differenceInAges(ages){
    let newAge = ages.sort((a,b) => a-b );
      return [newAge[0], newAge[newAge.length-1], newAge[newAge.length-1] -newAge[0]]
    }
    //SOLUTION 2:
    function differenceInAges(ages){
        return [Math.min(...ages), Math.max(...ages), Math.max(...ages)-Math.min(...ages)]
        }
        