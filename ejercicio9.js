const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let addition = 0;
  for (const number of numberList) {
    addition += number;
  }
  return addition;
}

console.log(sumNumbers(numbers));