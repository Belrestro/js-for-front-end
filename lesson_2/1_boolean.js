// прості присвоєння
const isTrue = true;
const isFalse = false;

console.log(isTrue, isFalse);

// з'являються при порівнянні

console.log(isTrue === isFalse); // пряме (обидва значення булівські)
console.log('true' == true); // конвертація (одне значення змінюєтся)

// всі типи конвертуются в булівські значення при використанні логічного не

console.log(!true); // натурально false
console.log(!!true); // true не не правда (подвійне заперечення)
console.log(!1); // false
console.log(!0); // true

// спеціальна конвертація типів через конструктор

const willBeTrue = new Boolean('true');
const willBeFalse = new Boolean(0); 

true && console.log('Друга частина виразу виконаєтся бо перша "правдива"');
false ||console.log('Друга частина виразу виконаєтся бо перша не "правдива"'); // оператор спробує дізнатися чи друга правдива

if (isFalse) {
  console.log('Вираз іде мимо консолі');
} else if (isTrue) {
  console.log('Вираз попаде у консоль');
}

if ('це значення конвертуєтся у правду') {
  console.log('Вираз іде у консоль');
} else if (isTrue) {
  console.log('Цей іде мимо');
}