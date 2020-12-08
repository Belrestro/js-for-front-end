// попадання в глобальну область видимості - це проблема 
// старих механізмів javascript
// свого часу це була набагато серйозніша проблема ніж конвертація типів

// змінні var та стандартні функції function погано сприймали область видимості
// і погано сприймають по сьогоднішній день

var globalVar = 1;

function globalFunction() {}

console.log(window.globalVar1);
console.log(window.globalFunction);

if (true) {
  var anotherGlobalVar = 2;
  function anotherGlobalFunction() {}

  console.log(window.anotherGlobalVar);
  console.log(window.anotherGlobalFunction);
}

for (var i = 0; i < 1; i++) {
  var shouldBeHidden = 'but not';
}

console.log(window.i); // !!! alarma огого
console.log(window.shouldBeHidden);

// на щастя є прийоми які навіть у застарілих механізмах дозволяють
// зберігати області видимості

// змінні у функції легко приховати з глобальної видимості
function insidesOfFunctionShouldBeHidden () {
  var superHiddenVariable = 123123;
}

insidesOfFunctionShouldBeHidden();

console.log(window.superHiddenVariable);

// артефакт старої епохи =P
(() => {
  console.log('Прихована змінна var', window.hiddenGlobal1);
  console.log('Прихована функція', window.hiddenFunction);
})(); // це один зі способів уникнути попадання в глобальну область видимості
// така конструкція називаєтся IIFE immediately invoked function expression
// це просто безіменна функція яка одразу виконується: дужки щоб приховати, дужки щоб викликати