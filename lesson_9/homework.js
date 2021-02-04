// створіть функцію що клонує об'єкт
// використовуйте лише методи es6
// приймає об'єкт як аргумент
// видає новий об'єкт як результат

const cloneObject = () => {};
const subject = {
  a: 1,
  b: 2,
  c: 'Something',
};

const cloned = cloneObject(subject);
console.assert(typeof cloned === 'object', 'Should be an object');
console.assert(subject !== cloned, 'Should be different object');

for (const key in subject) {
  console.assert(subject[key] === cloned[key], 'Should have all the same properties')
}

// створіть функцію яка приймає ключ (Symbol)
// і повертає об'єкт (Скриню) (закриту)
// мають бути 3 методи:
// unlock - відкриває скриню (повертає true) приймає ключ, якщо ключ підійшов (відкриває скриню)
// take - забираю якусь суму
// deposit - додає якусь суму до загальної
// і 2 властивості
// locked - вказує чи скриня закрита
// amount - вказує скільки зараз у скрині
// методи unlock та take не мають працювати якщо замок не відчинений
// один ключ може підходити до декількох скринь

const createLocker = (key) => {};

const key = Symbol('key');
const lock = createLock(key);

console.assert(lock.locked === true, 'має бути зачинений');