if (true) {
  console.log('Все вийшло');
}

if (false) {
  console.log('Це ніколи не запуститься'); // бо ми передаємо не правдива значення в круглі дужки
} else {
  console.log('Натомість запустится це'); // якщо жоден if, if else не спрацював то спрацьовує else
}

if (true) console.log('так теж можна'); // тільки якщо вираз один
else console.log('Але тільки якщо вираз один');

var lot;

if (false) {
  lot = 'lot failed';
  console.log('Це ніколи не запуститься');
} else if (false) {
  lot = 'lot failed';
  console.log('Це ніколи не запуститься');
} else if (true) {
  lot = 'bingo';
  console.log('можна тримати декілька умовних блоків');
} else {
  lot = 'lot failed';
  console.log('Це ніколи не запуститься');
}

console.log('Результат змінної має бути bingo:', lot);