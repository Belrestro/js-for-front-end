// вирази можна об'єднати
// математичними операторами

const joinedString = 'Hello' + ' ' + 'world'; // кожен окремий радок це вираз, коли вони об'єднались це новий вираз
const someCalculation = (1 + 2 + 3 + 4) * 5 / 5; // дужки і різні математичні оператори задаються черговість об'єднання

// логічним AND

const valueOfThisWillBeString = true && 'string'; // перша частина, якщо правдива, іде до другої частини, якщо далі немає ще одного AND то повертаєтся останнє значення
const valueOfThisWillBeFalse = false && 'string'; // перша частина, якщо не правдива то вона і повертаєтся

console.log(valueOfThisWillBeString);
console.log(valueOfThisWillBeFalse);

const zeroValue = 0 && undefined;
const notDefinedValue = 1 && undefined;

console.log(zeroValue);
console.log(notDefinedValue);

const chain5 = 1 && 2 && 3 && 4 && 5;
const chain0 = 1 && 2 && (3 && 0) && 5; // до п'яти черга не дійде

console.log(chain5); // 5
console.log(chain0); // 0

// логічним OR

// як тільки знайдене правдиве значення, весь ланцюжок перестає виконуватись

const valueWillBeTrue = true || 'string'; // перша частина, якщо правдива,то вона і повертаєтся
const valWillBeString = false || 'string'; // перша частина, якщо не правдива то шукаємо правдиву далі

console.log(valueWillBeTrue);
console.log(valWillBeString);

const nullValue = 0 || null; // якщо і такої немає повертаємо те що було в кінці

console.log(nullValue);



