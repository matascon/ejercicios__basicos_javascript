const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function nameFinder(nameList, nameToFind) {
  let result;

  if (nameList.indexOf(nameToFind) == -1) {
    result = false;
  } else {
    result = true;
    console.log("La posicion del elemento es: " + nameList.indexOf(nameToFind));
  }
  return result;
}

console.log(nameFinder(names, "Peggy"));