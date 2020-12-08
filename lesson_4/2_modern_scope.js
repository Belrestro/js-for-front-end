// сучасні змінні let, const не страждають будь якими проявами
// порушення області видимості
// тому вони такі хороші та чудові

let notGlobal1 = 1;
const notGlobal2 = 2;
const notGlobalFunction = () => {};

console.log('let має бути undefined', window.notGlobal1);
console.log('const має бути undefined', window.notGlobal2);
console.log('const з функцією має бути undefined', window.notGlobalFunction);

if (true) {
  const hiddenFromSite = 'awww yeah';
}

console.log('змінна у блоці if невидима', window.hiddenFromSite);

for (let i = 0; i < 1; i++) {
  let hiddenVar = 123;
}

console.log('змінна у циклі невидима', window.hiddenVar);