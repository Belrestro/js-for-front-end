// цікавий механізм тепер і у звичайних рядків
// тепер є спеціальний радок який
// 1 - може бути на декілька рядків
// 2 - можна параметризувати

const multiLineString = `
  wow,
  such,
  cool
`;

console.log(multiLineString);

const sinsCounter = (counter) => {
  console.log(`You have ${counter} sins`);
}

sinsCounter(0);