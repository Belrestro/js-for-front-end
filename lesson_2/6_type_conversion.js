// в цілому треба це знати, але у нашій спільноті ця тема дещо табу
// оскільки конвертація типів може ставатися у наслідок погано написаного коду

// ось приклади які треба знати

// неправдиві значення
'', 0, null, undefined, [], NaN

// приведення до рядка
'' + 1 // '1'
'2' + 1 // '21'

// приведення до числа
-'2' // 2
+'2' // 1
-true // -1
-false // 0
'2' / 2

// провалені арефметичні операції конвертуються у NaN
'a' - 2
{} * 2
undefined + 1

function toString(arg) {
  if (typeof arg === 'number') {
      return '' + arg;
  } else if (arg === undefined) {
      return 'undefined';
  } else if (arg === null) {
      return 'null';
  } else if (typeof arg === 'object') {
    return '[object Object]';
  }
  return arg;
}

console.log(new String(null), toString(null));
console.log(new String(undefined), toString(undefined));
console.log(new String(123), toString(123));
console.log(new String(-100), toString(-100));
console.log(new String({}), toString({}));
console.log(new String('String'), toString('String'));