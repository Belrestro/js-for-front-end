const array = []; // простий масив
const other = [1,2,3,4,5]; // масив зі стандартними значеннями
// якщо об'єкт це пари [key]: [value] ключ дані
// то масив це просто масив значень які розділяются комами

// щоб дізнатися кількість елементів масиву треба звернутися до властивості "length"
console.log(other.length); // довжина масива 5 всередині п'ять елементів
console.log(array.length); // довжина 0 всередині жодного

console.log(other); // вони гарненько виглядають в консолі
console.log(other.toString('')); // і досить непогано перетворюются в рядок


// щоб дістати конкрений елемент масиву потрібно
// використати нотацію з квадратними дужками і передати туди число

console.log(other[0]); // перший елемент масиву, його індекс - 0 
console.log(other[4]); // п'ятий елемент масиву, його індекс - 4 
console.log(other[-1]); // якщо дістати елемент якого не існує буде - undefined
console.log(other[100]); // якщо дістати елемент якого не існує буде - undefined

// щоб зміними елемент масиву так само як дістати але з присвоєнням

array[0] = 101;
array[1] = '212';
array[0] += 12;

console.log(array);

// щоб додати елементи в масив використовують два методи
// push - щоб додати елемент в кінець
array.push(313);
// unshift - щоб додати елемент в початок
array.unshift(null);
console.log(array);
// обидва ці методи після виконання повертають нову довжину масиву
console.log(array.push(1));
console.log(array.push(1));
console.log(array.unshift(1));

array.push = function(val) {
  this[this.length] = val;
  this.length++;

  return this.length;
}

array.pop = function () {
  if (this.length === 0) return undefined;
  const val = this[this.length - 1];
  this.length--;
  delete this[this.length - 1];

  return val;
}

// щоб прибрати елементи з масивц використовують два методи
// pop - щоб прибрати з кінця
array.pop();
// shift - щоб прибрати з кінця початоку
array.shift();
// обидва ці методи після виконання повертають елемент який прибрано з масиву
console.log(array.pop());
console.log(array.pop());
console.log(array.shift());
console.log(array.shift());
console.log(array.shift());

// !!! ALARMA !!! якщо не задати дані я просто дати коми то буде масив зі значеннями undefined
const undefinedArray = [1,,,,,,,]; // масив значень undefined,
// кожне значення відокремлено комою =O

const someArray = [1,2,3,4];

someArray.find = function (val) {
  for (let i = 0; i < this.length; i += 1) {
    if (val === this[i]) {
      return i;
    }
  }

  return -1;
};
