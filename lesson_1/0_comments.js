/*
 * Це комментар на багато рядків
 * Коментарі існують лише для розробників
 * Інтерпитатор їх ігнорує
 *
 * Такод інерпритатор ігнорує пробіли
 * які не відокремлюють слова
 *
 * const a = 1;
 * var b = 2;
 */

// Це комментар в один рядок
// приклади:

const a=1; // задаємо константу, пробіли лише між словами (інтерпритатору пофіг)
var b = 2; // задаємо змінну, пробіли всюди (інтерпритатору так само пофіг)
var c
=
    3; // кошмарний, кошмарний код, (інтерпритатору це однаково)

console.log(a + b + c); // виводимо змінну
