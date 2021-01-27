// створіть лагцюгову функцію fibonaccy
// вона повертає об'єкт з двома методами:
// - add збільшеє число фібоначі на один порядок і повертає ланцюг
// - value повертає теперішнє число
// кожне наступне число фібоначі - це сума попередніх двох (якщо попередніх немає то це число 1)

const fibonacci = () => {
  // ваш код
}
// fibonacci 1,1,2,3,5,8,13,21,34

// створіть ланцюгову функцію combineString
// при кожному її ланцюговуму виклику
// якщо переданий аргумент (рядок) то повертає функцію, і додає рядок до минулого
// якщо аргументу не було повертає значення

const combineString = () => {}

// TESTS

// ##FIBONACCI
/*
const fib1 = fibonacci();

for (let i = 0; i < 5; i++) {
  fib1.add();
}
assert('fifth fibonacci number should be 5:', fib1.value() === 5);

const fib2 = fibonacci();

for (let i = 0; i < 8; i++) {
  fib2.add();
}
assert('eighth fibonacci number should be 21:', fib2.value() === 21);

assert(
  'second fibonacci number should be 1:',
  fibonacci().add().add().value(),  
);
*/

// COMBINE_STRING
/*
assert('should be "happyBirthDay" string', combineString('happy')('Birth')('Day')() === 'happyBirthDay');
assert('should be "day" string', combineString('day')() === 'day');
*/

function assert(description, exp) {
  if (exp) return;
  throw new Error(description)
}