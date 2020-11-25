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

if (false) {
  console.log('Це ніколи не запуститься');
} else if (false) {
  console.log('Це ніколи не запуститься');
} else if (true) {
  console.log('можна тримати декілька умовних блоків');
} else {
  console.log('Це ніколи не запуститься');
}