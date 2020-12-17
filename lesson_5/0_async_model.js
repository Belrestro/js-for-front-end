for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // дивовижні наслідки використанні var
}
// асинхронність
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

let o = 'Odin dva tri'; // була собі змінна

setTimeout(() => {
  o = '4 5 6';

  console.log(o);
}, 1000);

console.log(o); // у якись момент часу вона зміниться
// але зараз виконання коду передбачуване