const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];

function averageWord(list) {
  let totalOfElements = list.length;
  let addition = 0;
  
  for (const element of list) {
    if (typeof element === "number") {
      addition += element;
    } else {
      addition += element.length;
    }
  }
  return addition / totalOfElements;
}

console.log(averageWord(mixedElements).toFixed(2));