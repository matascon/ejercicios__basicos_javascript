const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(stringList) {
  let counter = 0;
  let largerWord;
  for (const element of stringList) {
    if (counter < element.length) {
      counter = element.length;
      largerWord = element;
    }
  }
  return largerWord;
}

console.log(findLongestWord(avengers));