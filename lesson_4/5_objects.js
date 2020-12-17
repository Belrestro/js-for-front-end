// раніше я казав що об'єкти це не індексовані типи
// це пари ключ значення
const object = {
  a: 1,
  b: 2,
  c: 3
};
// часто буває необхідно пройтися по всії їхніх ключах або значеннях
// знати які ключі або значення всередині -- неможливо
// для цього можна використати статичні методи конструктора Object

console.log(Object.values(object)); // повертає массив всіх значень об'єкта
console.log(Object.keys(object)); // повертає массив всіх ключів об'єкта

// такі масиви можна перебирати і таким чином ітерувати об'єкти

const values = Object.values(object);
for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}

// якщо ми хочемо об'єднати 2 об'єкти в один
// призначити всі властивості одного - іншому

const object1 = {
  foo: 'bar',
  p1: 'val 1',
};
const object2 = {
  foo: 'but other value',
  p2: 'val 2',
};

// можна використати Object.assign
console.log(Object.assign(object1, object2));
// він об'єднує всі властивості усіх об'єктів
// якщо властивості збігаються, то будуть властивості другого об'єкта

console.log(object1); // також після таких операцій другий об'єкт залишаєтся з усіма
// додатковими властивостями

// це недолік цього методу як і перевага, до об'єкт змінюється
// буває таке що цього хочеться уникнути
// для цього потрібно в якості першого аргументу передати інший об'єкт

console.log(Object.assign({}, object1, object2)); // вуаля