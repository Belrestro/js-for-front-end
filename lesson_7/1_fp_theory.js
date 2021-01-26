// функціональне програмування це парадигма
// для ФП потрібно користуватися функціями для виріщення задач
// так само як у ООП у ФП є свої принципи, вони навіть простіші

// 1 - Чисті функції "pure functions" (при однакових аргументах завжди однаковий результат)
// 2 - Немутабельність "immutability" (аргументи у функції не повинні мінятися після її виклику)
// 3 - Відсутність побічних ефектів "no side effects" (від виклику функції зовнішня кухня не міняється)
// 4 - Функції як вираз "first class functions" (функції можна передавати як аргументи, і повертати як результат)
// 5 - Прозорість "referential transparency" (виклик фунції можна замінити її кінцевим результатом)

// трохи більше принципів ніж у ООП, але ну що ж...

// 1 - pure function
// функція буде чистою якщо важливі тільки її аргументи і вона не бере уваги
// умови яки поза її контролем

const purestFunction = () => 2; // функція буде повертати 2 хоч кінець світу наступи
const add2 = a => a + 2; // скільки разів не запускай цю функцію з однакови
const combine = (a,b,c) => a + b + c; // те ж саме

// поганий приклад теж приклад
const impureFunction = () => Math.random() > 0.5 ? 1 : 0;

console.log('impure function', impureFunction());
console.log('impure function', impureFunction());
console.log('impure function', impureFunction());
console.log('impure function', impureFunction());
console.log('impure function', impureFunction());

// no side effects 
let willDo = true;
const otherImpureFunction = (a, b) => willDo ? a + b : null;

console.log('other impure function', otherImpureFunction(1,2,3));
willDo = false;
console.log('other impure function', otherImpureFunction(1,2,3));

// 2 - immutability
// все просто - функція не має міняти вхідні дані, ніяк

const probablyImmutable = [1,2,3,4];

const arrayCombine = (array) => {
  let result = 0;
  let i = 0;
  while (i < array.length) {
    result += array[i];
    i++;
  }
  return result;
};

console.log('iterative run "arrayCombine" 1', arrayCombine(probablyImmutable));
console.log('iterative run "arrayCombine" 2', arrayCombine(probablyImmutable));

const incrementArray = (array) => {
  const newOne = [];
  let i = 0;
  while (i < array.length) {
    newOne[i] = array[i] + 1;
    i++;
  }
  return newOne;
}

console.log('iterative run "incrementArray" 1', incrementArray(probablyImmutable));
console.log('iterative run "incrementArray" 2', incrementArray(probablyImmutable));

// поганий приклад теж приклад


const mutativeArrayCombine = (array) => {
  let result = 0;
  while(array.length) result += array.pop();
  return result;
}

console.log('iterative run "mutativeArrayCombine" 1', mutativeArrayCombine(probablyImmutable));
console.log('iterative run "mutativeArrayCombine" 2', mutativeArrayCombine(probablyImmutable)); // масив змінився