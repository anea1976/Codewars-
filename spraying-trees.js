// CODEWARS 7KYU : SPRAYING TREES
// INSTRUCTIONS:
// There are five workers : James,John,Robert,Michael and William.They work one by one and on weekends they rest. Order is same as in the description(James works on mondays,John works on tuesdays and so on).You have to create a function 'task' that will take 3 arguments(w, n, c):

// Weekday

// Number of trees that must be sprayed on that day

// Cost of 1 litre liquid that is needed to spray tree,let's say one tree needs 1 litre liquid.

// Let cost of all liquid be x

// Your function should return string like this : 'It is (weekday) today, (name), you have to work, you must spray (number) trees and you need (x) dollars to buy liquid'

// For example:
// task('Monday',15,2) -> 'It is Monday today, James, you have to work, you must spray 15 trees and you need 30 dollars to buy liquid'
//SOLUTION 1 using template literal:
function task(w, n, c) {
    return `It is ${w} today, ${w==='Monday'? 'James':w==='Tuesday'?'John':w==='Wednesday'? 'Robert': w === 'Thursday'? 'Michael':'William'}, you have to work, you must spray ${n} trees and you need ${c * n} dollars to buy liquid`
  }

 // SOLUTION 2, USING SWITCH CASE:
 const task = (w, n, c) => {
    let x = '';
    switch (w) {
    case 'Monday':
      x = 'James';
    break;
    case 'Tuesday':
      x = 'John';
    break;
    case 'Wednesday':
      x = 'Robert';
    break;
    case 'Thursday':
      x = 'Michael';
    break;
    case 'Friday':
      x = 'William';
    break; 
  
  }
    return `It is ${w} today, ${x}, you have to work, you must spray ${n} trees and you need ${n * c} dollars to buy liquid`;
  }

  //SOLUTION 3 USING OBJECT LITERAL
  function task(w, n, c) {
    var names = {'Monday': 'James', 'Tuesday': 'John', 'Wednesday': 'Robert', 'Thursday': 'Michael', 'Friday': 'William'};
    return `It is ${w} today, ${names[w]}, you have to work, you must spray ${n} trees and you need ${n * c} dollars to buy liquid`;
  }

 