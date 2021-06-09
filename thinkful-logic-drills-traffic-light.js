// CODEWARS 8KYU - Thinkful - Logic Drills: Traffic light

// INSTRUCTIONS:
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, update_light('green') should return 'yellow'.

// FUNDAMENTALSCONTROL FLOWBASIC LANGUAGE FEATURES

// SOLUTION:
function updateLight(current) {
  
    return current === 'green'? 'yellow':
      current === 'yellow'? 'red': 'green';
    }

    //CLEVER SOLUTION:
    const updateLight = current => ({
        green: 'yellow',
        yellow: 'red',
        red: 'green',
      })[current]