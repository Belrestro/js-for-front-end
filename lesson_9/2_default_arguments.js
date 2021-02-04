// функції можуть назначати тандартні значення змінним
// деструктуровані об'єкти і масиви - теж

const func = (a = 1, b = 2) => {
  console.log(a, b);
}

func();

const counter = (i = 0) => () => i++;

const c = counter();

console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());

// це дещо аналогічно запису 

const counter1 = (i) => {
  if (i === undefined) {
    i = 0;
  }
  return () => i++;
}