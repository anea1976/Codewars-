// 6KYU CODEWARS - REVERSE VOWELS IN A STRING



// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

// reverseVowels("Hello!"); // "Holle!"
// reverseVowels("Tomatoes"); // "Temotaos"
// reverseVowels("Reverse Vowels In A String") // "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.

// Good luck!

//SOLUTIONS:
//1)
function reverseVowels(str) {
    let vowels= "aeiouAEIOU"
    let vowelsArray = str.split('').filter((x,i) => vowels.includes(x))
    return str.split('').map(y=> vowels.includes(y)? y=vowelsArray.pop(): y).join('')
    
  }

  //2)
  function reverseVowels(str) {
    const vowels = str.match(/[aeiou]/gi);
    return (vowels === null) ? str : str.replace(/[aeiou]/gi, c => vowels.pop());
  }


