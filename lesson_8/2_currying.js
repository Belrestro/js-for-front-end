// carrying - це замикання лексичного контексту
// це дуже схоже на bind за логікою
// але там не має (особливо) значення контекст

const add = a => b => a + b;

const fivePlus = add(5); // перший аргумент замкнений до наступного виклику

console.log('fivePlus 5 + 2 =', fivePlus(2));
console.log('fivePlus 5 + 3 =', fivePlus(3));
console.log('fivePlus 5 + 7 =', fivePlus(7));
console.log('fivePlus 5 + 12 =', fivePlus(12));

const createCounter = () => {
  let counter = 0; // змінна замкнена після першого виклику

  return () => {
    counter += 1;
    return counter;
  }
};
const counter = createCounter();

console.log('counter 1 -', counter());
console.log('counter 2 -', counter());
console.log('counter 3 -', counter());
console.log('counter 4 -', counter());

const forEachRepeated = (fn) => { // функція замкнена до будь якого наступного виклику
  return (array) => {
    for (let i = 0; i < array.length; i++) {
      fn(array[i], i, array);
    }
  }
}

const array1 = [1,2,3];
const array2 = ['a', 'b', 'c'];
const array3 = ['alpha', 'theta', 'gamma'];

const handler = forEachRepeated(console.log);

handler(array1);
handler(array2);
handler(array3);