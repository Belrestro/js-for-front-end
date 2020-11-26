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

// можна конвертувати інші дані спеціально
// до рядка

console.log(new String(null), null);
console.log(new String(undefined), undefined);
console.log(new String(123), 123);
console.log(new String(-100), -100);
console.log(new String({}), {});
console.log(new String('String'), 'String');

// до числа

console.log(new Number(null), null);
console.log(new Number(undefined), undefined);
console.log(new Number(123), 123);
console.log(new Number(-100), -100);
console.log(new Number({}), {});
console.log(new Number('String'), 'String');

// до булівського значення

console.log(new Booelan(null), null);
console.log(new Booelan(undefined), undefined);
console.log(new Booelan(123), 123);
console.log(new Booelan(-100), -100);
console.log(new Booelan({}), {});
console.log(new Booelan('String'), 'String');

// до об'єкту

console.log(new Object(null), null);
console.log(new Object(undefined), undefined);
console.log(new Object(123), 123);
console.log(new Object(-100), -100);
console.log(new Object({}), {});
console.log(new Object('String'), 'String');



// ось так воно працює під капотом

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


/*
Позапускайте ці вирази окремо, подивіться на результат

"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2
*/