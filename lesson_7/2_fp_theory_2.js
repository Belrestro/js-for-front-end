// 4 - first class functions

// передання фкнукій як аргументів (окремо від об'єктів) це рідкість в інших мовах програмування
// в javascript це "звичайний понеділок"

const repeat = (fn, times) => { // отримує функцію
  for(let i = 0; i < times; i++) fn(); // викликає функція
}

const lempard = i => () => i++; // повертає функцію

// 5 - referential transparency

const square = (x) => x ** 2;

console.log('referential transparency example 1 (32):', square(4) + square(4));
console.log('referential transparency example 1 (32):', 16 + square(4));
console.log('referential transparency example 1 (32):', square(4) + 16);