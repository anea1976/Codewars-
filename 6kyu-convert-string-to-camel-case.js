// 6KYU CODEWARS - CONVERT STRING TO CAMEL CASE 

// INSTRUCTIONS 
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// SOLUTIONS
// 1)
function toCamelCase(str){
  //account for  empty string
    if (str==="") return ""
    //split string into array based on separators '-' or '_'
     let strArray= str.includes('-')? str.split('-'):str.includes('_')? str.split('_'):str.split('');
     //check whether first word in array is capitalized
     let checkFirstCaps =String(strArray[0]).charAt(0)+ strArray[0].slice(1)===String(strArray[0]).charAt(0).toUpperCase()+ strArray[0].slice(1)
     // cut out first non-capitalized word
     let firstNonCaps =strArray.slice(0,1)
     // grab second part of array with non-capitalized first word and capitalize all words in it
     let secondNonCaps =strArray.slice(1).map(word=> word[0].toUpperCase()+ word.slice(1))
     //join first non-capitalized word to rest of already capitalized array
     let joinedNonCaps = [...firstNonCaps,...secondNonCaps].join('')
     
     return checkFirstCaps? strArray.map(word => word[0].toUpperCase() + word.slice(1)).join(''): joinedNonCaps;
     
       }

      //CLEVER SOLUTIONS
//2)
function toCamelCase(str){
  return str.replace(/(_|-)./g, m => m.substr(1, 1).toUpperCase());
}
