// не глобальна область видимості це можливість бачити змінні та функції зовні або всередині блоків
// якраз це ви і можете контролювати на ваш розсуд
const createIterator = () => {
  let i = 0; // зовнішня змінна 

  const iterator = () => { // недоступна зовні функції
    i += 1; // може змінювати щось у зовнішній функції
    let pinged = 'Counter counted ' + i; // не може бути доступна у зовнішній функції

    return pinged
  } // внутрішня функція

  return iterator;
} // зовнішня функція

const iterate = createIterator(); // я можу створити змінну бо вона у більш зовнішній області видимості

console.log(iterate());
console.log(iterate());
console.log(iterate());
console.log(iterate());

if (true) {
  const isCalculationCorrect = (3+3*3) === 12; 
  console.log(isCalculationCorrect); // змінна у блоці if недоступна зовні
}
const isCalculationCorrect = (4+4*4) === 20; // загальна область видимості не здогадуєтся про існування
// аналогічної змінної у блоці if
console.log(isCalculationCorrect);