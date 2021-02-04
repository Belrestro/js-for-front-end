// тепер існує клас який вам може видати унікальний ідентифікатор
// як секретний ключ до ваших властивостей

const key = Symbol('ключ');
const key2 = Symbol('інший ключ');

const obj = {};

obj[key] = 1;
obj[key2] = 2;

for (const k in obj) { // не може перебрати - можна доступатися тільки напряму
  console.log(k);
}

console.log(key, obj[key]);

// так, наприклад, можна створювати секретні методи у классів

class TopSecret {
  [key]() {
    console.log('секретний метод виконано');
  }
}

const secret = new TopSecret();

secret[key]();