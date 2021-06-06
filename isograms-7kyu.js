// CODEWARS 7KYU -ISOGRAMS
// INSTRUCTIONS:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

// SOLUTION:
function isIsogram(str){
    str = str.toLowerCase()
    for (let i=0; i< str.length; i++){
      for (let j= i+1; j<str.length; j++){
        if(str[i] === str[j]){
          return false;
        }
      }
    }
    return true;
  }

//   SOLUTION WITH REGEX:
//\w matches any word character (equivalent to [a-zA-Z0-9_])
// . matches any character (except for line terminators)
// * matches the previous token between zero and unlimited times, as many times as possible, giving back as needed (greedy)
// \1 matches the same text as most recently matched by the 1st capturing group

function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
  }