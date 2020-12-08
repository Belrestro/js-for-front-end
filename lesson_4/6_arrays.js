// у масивів є дуже зручні методи для використання

const sampleArray = [1,2,3,4,5,6];

// щоб дізнатися чи є конкретне значення у массиві

console.log(sampleArray.includes(2));
console.log(sampleArray.includes(12));
console.log(sampleArray.includes(6));

// щоб дізнатися який індекс такого значення

console.log(sampleArray.indexOf(2));
console.log(sampleArray.indexOf(1));
console.log(sampleArray.indexOf(7)); // якщо такого значення в масиві немає то значення буде -1


// також можна об'єднувати декілька масивів у один новий масив
const sampleArray2 = [7,8,9,10];
// треба саме приєднати один до іншого

console.log(sampleArray.concat(sampleArray2));
console.log(sampleArray2.concat(sampleArray));
console.log(sampleArray.concat(sampleArray)); // ну або той же самий

console.log(sampleArray, '-', sampleArray2); // масиви при цьому не змінюються

// якщо потрібно створити новий масив з існуючого можна його порізати

console.log(sampleArray.slice(1)); // якщо аргумент 1 то каже з якого індексу починати різати
console.log(sampleArray.slice(4)); // якщо аргумент 1 то каже з якого індексу починати різати
console.log(sampleArray.slice(1, 3)); // якщо їх 2 то різати з токого-то по такий-то