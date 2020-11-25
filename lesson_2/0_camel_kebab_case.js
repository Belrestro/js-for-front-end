const simpleCamelCaseVariable = 'Такі змінні це стандартна домовленість розробників javascript';

// це так само стосуєтся і функцій, та классів
// саме CamelCase найрозповсюдженіший у JavaScript тому просто звикайтеПисатиТак
// ось вам декілька прикладів змінних

const helloWorldString = 'Hello world';
const firstChar = helloWorldString[0];
const simpleSum = 1 + 123;
const piNumber = Math.PI;

// та функцій

function callMeDaddy(name) {
  console.log(name + 'you are dadday');
} 

function squareRoot(n) {
  return Math.sqrt(n);
}

function addName(name, phrase) {
  return name + ' says: ' + phrase;
}

const simple_kebab_case_variable = 'Змінні такого типу прийшли з іншох мови "C"';
// таки формат розповсюджений але не у javascript натомість такі іменування часто можна знайти у назвах файлів
// lesson_2, path_finder.js, react_bundle.js, data_set.json