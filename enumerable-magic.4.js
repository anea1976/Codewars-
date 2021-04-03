CODEWARS 8KYU Enumerable Magic #4 - True for None?
Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

Ruby: If you need help, here is a reference:

http://www.rubycuts.com/enum-none

SOLUTION:
function none(arr, fun){
    for (let i=0; i<arr.length; i++)
    if (fun(arr[i])) {
      return false;
    } 
      return true;
      
    }

    CLEVER SOLUTION:

    function none(arr, fun){
        return !arr.some(fun);
      }
    