// напишіть функцію find, вона має знайти конкретний елемент масиву
// вона приймає масив і функцію, якщо функці яку передали
// після виклику повертає "правдиве" значення
// то його повертає і find

const find = () => {};

console.assert(find(['a', 'b', 'c'], (e) => e === 'c') === 'c', 'Should find c');
console.assert(find(['a', 'b', 'c'], (e) => e === 'a') === 'a', 'Should find a');
console.assert(find(['a', 'b', 'c'], () => {}) === undefined, 'should not find anything');
console.assert(find([{a:1}, {a:2}, {a:3}], el => el.a === 2 ), 'should not find object');

// напишіть рекурсивну фунцію factorial
// вона приймає число і рахує добуток всії чисел від нього і до оиниці
// 7! - це факторіал семи 7! = 7 * 6 * 5 * 4 * 3 * 2 * 1
// 12! = 12 * 11 * 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
// функція обов'язково має бути рекурсивна
// спробуйте написати найкоротший можливий код для функції

const factorial = n => {};

console.assert(factorial(1) === 1, '1! = 1');
console.assert(factorial(7) === 5040, '7! = 5040');
console.assert(factorial(3) === 6, '3! = 6');
console.assert(factorial(5) === 120, '5! = 120');
console.assert(factorial(12) === 479001600, '12!' + 479001600);
