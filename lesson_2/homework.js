/*
  Напишіть функцію "isZero" яка приймає
  числа, чи це нуль,
  повертає або так, або ні
  
  приймає 1 аргумент, булівське значення 
*/
function isZero() {
  
}

/*
  Напишіть функцію "isGreaterThen100" яка приймає
  числа, і вирішує чи більші вона за 100 (саме більше),
  повертає або так, або ні
  
  приймає 1 аргумент, булівське значення 
*/

function isGreaterThen100(val) {
  // ваш код
}

/*
  Напишіть функцію "butComputerSays" яка приймає
  рядки і додає до них "But computer says: ",
  якщо значення не рядок то повертає пустий рядок
  
  приймає 1 аргумент, повертає новий рядок
*/

function butComputerSays(str) {
  // ваш код
}

/*
  Напишіть свою функцію "toBoolean" яка приймає
  різні типи даних і конвертує їх так само як і
  стандартний конвертер:
  
  приймає 1 аргумент, повертає булівське значення
*/

function toBoolean (arg) {
  // ваш код
}

const testSuite = (func, testValues, expectedValues) => {
  for (let i = 0; i < testValues.length; i++) {
    const result = func(testValues[i]);

    if (result !== expectedValues[i]) {
      throw new Error(
        'Виконання функції ' +
        func.name + 
        ' пройшло не очікувано, очікуваний результат: ' +
        expectedValues[i] + 
        'справжній результат: ' +
        result
      )
    }
  }

  console.log('Функція ' + func.name + ' протестована, всі результати збігаються');
}


// тестуємо isZero
testSuite(isZero, [0, false, null, undefined, '', -0], [true, false, false, false, false, true]);
// тестуємо isGreaterThen100
testSuite(isZero, [100, 99, 101, '100', -100, 50 + 50], [false, false, true, false, false, true]);
// тестуємо butComputerSays
testSuite(butComputerSays, ['ok I will do as you say', 'raise of the machines', null, -1, false, undefined, 0], ['But computer says: ok I will do as you say', 'But computer says: raise of the machines', '', '', '', '', ''])
// тестуємо toBoolean
testSuite(
  toBoolean,
  [0, -1, false, null, undefined, '10', '-12.2', '', {}],
  [new Boolean(0), new Boolean(-1), new Boolean(false), new Boolean(null), new Boolean(undefined), new Boolean('10'), new Boolean('-12.2'), new Boolean(''), new Boolean({})])