// 8kyu Fake Binary
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Solution 1
function fakeBin(x) {
    //use split('') to turn the string into an array of substrings and then loop through it using the map() method, then use join('') to revert back to a string
    return x.split('').map(num => {
        if (num < 5) {
            return '0'
        }
        else if (num >= 5) {
            return '1'
        }
    }).join('')

}

//Solution 2

function fakeBin(x) {
    return x.split('').map(num => num < 5 ? 0 : 1).join('');

}

//Solution 3 (using regex)
function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}