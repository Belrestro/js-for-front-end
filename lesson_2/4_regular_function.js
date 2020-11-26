// звичайні функції у JS мають деякі цікаві властивості

// 1 - у них може не бути імені, але тоді їх треба зберігати у змінних напевне

const lambda = function() {
  console.log('just created a labda');
}
lambda();

// 2 - їх можна оголошувати пізніше ніж використовувати

veryLateDeclaration();

// 3 - у них є внутрішня змінна arguments індексований тип, якій зберігає усі передані аргументи

function notALambda() { // ми не оголосили жодного аргументу
  console.log('Але все ще отримали аргументи', arguments);
  console.log('А перший з них:', arguments[0]);
}

notALambda(1,2,3,4);

function veryLateDeclaration() {
  console.log('But it works anyway');
}