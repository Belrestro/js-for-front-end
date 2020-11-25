// у функції може бути ім'я, має бути тіло і можуть бути аргументи

// це стандартна функція
function add (num1, num2) { // add - це ім'я, num1 num2 - це аргументи, аргументи це як змінні var, їхні імена розділяются комами
  return num1 + num2; // все що у фігурних дужках це тіло функції
}

// усі функції можна зберігати у змінних
const func1 = function logSomethingToConsole () { // функції можуть бути без аргументів
  console.log('literal something');
}

// функції викликаются як методи, але вони не залежні від якихось інших даних
// натомість функції отримують дані як аргументи і роблять щось з ними

func1();
console.log(add(1, 2));

// у функції без аргументів все одно можна передавати аргументи, але вони ігноруються

func1(1, 2, 3, 4, 5);

// також можна передавати більше або менше аргументів ніж зазначено у функції
// ті аргументи які ви не передали будуть значення undefined

console.log(add()); // undefined + undefined повертає NaN not a number провалена арефметична операція

// також аргументи це змінні, їх можна міняти

function modifyArgument(arg) {
  console.log('Before', arg);
  arg += ' ehehe';
  console.log('After', arg);
}

modifyArgument('Simon says');

// функції завжди повертають значення, як і вирази, для цього у них є ключове слово "return"

function return1 () {
  return 1; // якщо "return" не було використано, то функія повертає undefined
}

console.log(return1());

// функції можна передавати як дані, вони теж можуть бути аргументами

function doStuff(func) {
  console.log('calling', func.name);
  if (typeof func === 'function') {
    func();
  }
}

doStuff(func1);