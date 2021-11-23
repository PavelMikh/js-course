function anagrams(word, words) {
  const arrOfWord = word.split('');

  return words.filter(w => {
    if (word.length === w.length) {
      const arrOfW = w.split('');
      return arrOfW.sort().join('') === arrOfWord.sort().join('');
    }
  });
}

console.log('test 1: ', anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));

console.log('test 2: ', anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));

console.log('test 3: ', anagrams('laser', ['lazing', 'lazy',  'lacer']));

// next kata url: https://www.codewars.com/kata/5672682212c8ecf83e000050
