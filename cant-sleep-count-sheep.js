CODEWARS  KYU IF YOU CAN'T SLEEP, JUST COUNT SHEEP!!
INSTRUCTIONS:
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

SOLUTION 1:
// Array.from(Array(num) creates an array with 'num' number of empty elements
//the Array.from function takes the map function as an optional second argument, so (x,i) represents the args of my map function, x is the current value, i is the index of x or the current value
//map will use the template literal to create a string for each element of the newly created array
//join("") will turn the array into a string
var countSheep = function (num){
    return Array.from(Array(num), (x, i) => `${i + 1} sheep...`).join("")  
    
 }

 SOLUTION 2:
 // the underscore '_' in (_,i) stands for current value, but it won't be used, so it can be considered as kind of a throw away value.
 const countSheep = length =>
  Array.from({ length }, (_, i) => ++i + ' sheep...').join('')
