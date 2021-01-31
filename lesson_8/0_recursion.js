// рекурсія це важко пояснити...
// 1 - це фотографія себе в дзеркало
// 2 - мікрофон біля динаміку
// 3 - функція яка викликає сама себе

// базовий приклад

// while (true) {}
// const neverEnding = () => neverEnding();
// neverEnding();

const forFunc = (fn, times) => {
  for (let i = 0; i < times; i++) {
    fn();
  }
}

const forRecursive = (fn, times) => {
  fn();
  times > 0 && forRecursive(fn, times - 1);
}

// у рекурсивних функцій має завжди бути умова виходу, інакше це
// бескінечний цикли (насправді на 10 000 виконань / внутрішню складність)

const iterate = (array, fn, i) => {
  if (array.length < i) return;
  fn(array[i]);
  iterate(array, fn, (i || 0) + 1);
}

// Задача - є число вам потрібно дізнатися чи можливо його скласти з суми п'ятірок і двійок
// 4 це - 2 + 2
// 7 це 5 + 2
// 15 це - 5 + 5 + 5, або 2 + 2 + 2 + 2 + 2 + 5

const isCollectiveSum = (num) => {
  if (num < 0) return false; // промахнулися
  if (num === 0) return true; // якраз вписалися
  return isCollectiveSum(num - 5)
    || isCollectiveSum(num - 2);
}

console.assert(isCollectiveSum(4), '2 + 2 = 4');
console.assert(isCollectiveSum(5), '5 = 5');
console.assert(isCollectiveSum(7), '2 + 5 = 7');
console.assert(isCollectiveSum(15), '5 + 5 + 5 = 15');
console.assert(isCollectiveSum(21), '5 + 5 + 5 + 2 + 2 + 2 = 21');

// рекурсивний пошук це дуже особливий механізм
// (пошук в лабіринтах)
// "#": wall
// "-": empty
// "@": end

const middleLabyrinth = [
  ['-','#','#','#'],
  ['-','-','-','@'],
  ['-','#','#','-'],
];

const strongLabyrinth = [
  ['-','#','#','#', '#','#'],
  ['-','-','#','#', '-','@'],
  ['#','-','#','#', '-','#'],
  ['#','-','-','-', '-','#'],
];

const veryHard = [
  ['-','#','#','#', '#','#', '#', '#'],
  ['-','-','#','#', '-','-', '#', '#'],
  ['#','-','#','-', '-','-', '#', '#'],
  ['#','-','#','-', '#','-', '#', '@'],
  ['#','-','#','-', '#','-', '#', '-'],
  ['#','-','-','-', '#','-', '-', '-'],
  ['#','-','#','#', '-','#', '#', '#'],
];

const goThroughLabyrinth = (map, startX, startY) => {
  const makeAMove = (x, y, path) => {
    const row = map[x];
    const [last, preLast] = path.slice(-2);
    const cell = row && row[y];
    if (!cell || cell === '#') return false;
    if (cell === '@') return path;
    if (last === 'up' && preLast === 'down') return false;
    if (last === 'down' && preLast === 'up') return false;

    return makeAMove(x, y + 1, path.concat(['forward']))
      || makeAMove(x - 1, y, path.concat(['up']))
      || makeAMove(x + 1, y, path.concat(['down']));
  }

  return makeAMove(startX, startY, []) || [];
}

console.log(goThroughLabyrinth(middleLabyrinth, 1, 0));
console.log(goThroughLabyrinth(middleLabyrinth, 0, 0));
console.log(goThroughLabyrinth(strongLabyrinth, 0, 0));
console.log(goThroughLabyrinth(veryHard, 0, 0));