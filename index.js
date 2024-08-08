function totalCharCount(words) {
  let totalCharacters = 0; 

  for (let i = 0; i < words.length; i++) {
    
    totalCharacters += words[i].length;
  }

  return totalCharacters;
}

console.log(totalCharCount(['Issız', 'bir', 'adada', 'yalnız', 'kaldı']));
console.log(totalCharCount(['Tren', 'kaçtı', 'bir', 'kere']));
