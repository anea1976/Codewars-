// CODEWARS 8KYU - FIXME: REPLACE ALL DOTS
// INSTRUCTIONS:
// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.

// SOLUTION:
//  the \  escapes special characters, such as the dot which in regex means reolace everything
//  the g will find all occurences in the string

var replaceDots = function(str) {
    return str.replace(/\./g, '-');
  }