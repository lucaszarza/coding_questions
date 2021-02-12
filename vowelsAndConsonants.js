function vowelsAndConsonants(string) {
  var noVowels = ''

  for (let letter of string) {

    const vowel = /^[aeiou]$/i.test(letter);

    if (vowel) {
      console.log(letter);
    } else {
      noVowels += letter;
    }
  }
  for (let noVowel of noVowels) {
    console.log(noVowel);
  }
}

const a = "javascriptloops";
vowelsAndConsonants(a);
