// 8KYU CODEWARS -POLISH ALPHABET 
// INSTRUCTIONS
// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
// FUNDAMENTALS STRINGS

//SOLUTIONS:
//1)
function correctPolishLetters (string) {
    let hash={
      ą:'a',
      ć:'c',
      ę:'e',
      ł:'l',
      ń:'n',
      ó:'o',
      ś:'s',
      ź:'z',
      ż:'z'
      
    }
    
    
   return string.split('').map(letter=> hash[letter]? letter.replace(letter, hash[letter]): letter).join('')
  }

  //2)
  function correctPolishLetters (string) {
    let letters = {ą: "a",
  ć: "c",
  ę: "e",
  ł: "l",
  ń: "n",
  ó: "o",
  ś: "s",
  ź: "z",
  ż: "z"};
  for (let i in letters){
    string = string.split('').map(e => e == i ? letters[i] : e).join('');
  }
  return string;
  }