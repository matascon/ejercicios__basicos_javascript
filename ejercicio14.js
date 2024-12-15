const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function repeatCounter(list) {
  const counterList = [];
  let checker;

  counterList.push({word: list[0], repeat: 1});
  for (let i = 1; i < list.length; i++) {
    checker = false;
    for (const element of counterList) {
      if (element.word === list[i]) {
        element.repeat++;
        checker = true;
      }
    }
    if (!checker){
      counterList.push({word: list[i], repeat: 1})
    }
  }
  return counterList;
}

console.log(repeatCounter(words));