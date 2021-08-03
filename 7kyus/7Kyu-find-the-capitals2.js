// 7KYU CODEWARS - FIND THE CAPITALS 2
// INSTRUCTIONS
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// SOLUTIONS
//1)
var capitals = function (word) {
  return word.split('').map((el,i)=>el===el.toUpperCase()? i: '').filter(x => Number.isInteger(x))
};

// OTHERS
// 2)
var capitals = function (word) {
  var caps = [];
  for(var i = 0; i < word.length; i++) {
    if(word[i].toUpperCase() == word[i]) caps.push(i);
  }
  return caps;
};

// 3)

var capitals = function (word) {
  return word.split('').reduce(function(n, l, i){
    return /[A-Z]/.test(l) && n.push(i), n;
  }, []);
};

// 4)
var capitals = function (word) {
  return word.split('').reduce(function(acc, curr, i) {
    if (curr.toUpperCase() === curr) acc.push(i);
    return acc;
  }, []);
};