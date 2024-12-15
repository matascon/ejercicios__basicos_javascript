const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(list) {
  const newArray = [];

  for (const element of list) {
    if (newArray.indexOf(element) == -1) {
      newArray.push(element);
    }
  }
  return newArray;
}

console.log(removeDuplicates(duplicates));