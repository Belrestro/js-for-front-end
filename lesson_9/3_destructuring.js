// деструктуризація - це процес запису елементів масиву чи об'єкта у змінну

const object = {
  property1: 123,
  property2: 321,
  nested: {
    a: 1,
    b: 2
  },
};

// деструктуризація об'єкта

const { property1 } = object; // ми створили змінну "property1" і значення взяли з
// одноіменної властивості у об'єкті
console.log('property1', property1);
const { notExist } = object; // якщо властивості немає, ми створили змінну notExist - зі значенням undefined


console.log('notExist', notExist);
const { nested: { a } } = object; // можна також пірнути в об'єкт за змінними
// ти тільки створили змінну a зі значенням object.nested.a
// якщо заглиблюватись у об'єкт і там немає іншого об'єкту буде помилка


// крута властивість деструкруризації що можна збирати їх до купи знову

const newObject = { property1, a }; // якщо вказати тільки імена, і є змінні з такими іменами в області видимості
// то так можна швидко створити об'єкт
console.log('newObject', newObject);

// ще крута властивість - це задавати стандартні значення при деструктуризації

const { property3 = 12 } = object; // property3 не існує але ми їй задамо стандартне значення
console.log('property3', property3);


// деструктуризація масиву

// з масивами трохи простіше але теж багато цікавого

const array = ['a', 'b', 'c', 'd'];

// кожна змінна це порядковий елемент масиву

const [first, second] = array;
console.log('[first, second]', first, second);

// масив теж легко збирати докупи (але це не валастивість es6 ) так і раніше було
console.log([first, first, first, second]);

// також можна використовувати spread оператор для того щоб згрупувати всі елементи до 
const [one, two, ...rest] = array;
console.log('take first, leave rest', one, two, rest);

// і теж можна задавати стандартні властивості

const [a1, andLast = 'has value'] = [1];
console.log('[a1, andLast]', a1, andLast)