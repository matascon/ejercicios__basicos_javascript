const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  let totalOfNumbers = numberList.length;
  let addition = 0;
  
  for (const number of numberList) {
    addition += number;
  }
  return addition / totalOfNumbers;
}

console.log(average(numbers).toFixed(2));