// CODEWARS 7KYU- CAT AND MOUSE- EASY VERSION
// INSTRUCTIONS:
// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

// C.....m returns 'Escaped!' <-- more than three characters between

// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

// FUNDAMENTALS STRINGS

// SOLUTION:
function catMouse(x){
    return x.substring((x.indexOf('C')+1), x.indexOf('m')).length > 3 ? 'Escaped!':'Caught!'
    }

    // SOLUTION WITH REGEX
    // C matches C literally, case sensitive
    // \. matches the character . literally (case sensitive)
    // {0,3} matches the previous token between 0 and 3 TimeRanges, as many times as possible, giving back as needed
    //m matches the m character literally
    const catMouse = x =>
  /C\.{0,3}m/.test(x) ? `Caught!` : `Escaped!`;