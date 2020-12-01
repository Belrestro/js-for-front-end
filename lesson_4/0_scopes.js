

var outerVariable = 123; // це зовнішня змінна

let array = [ 1, 2, 3, 4 ];
let other = ['a', 'b', null, {}];


// DANGER ZONE !!!!

let condition = false;
while (condition) {
  console.log('Will never Iterate');
}


innerFunction(); // помилки не буде

var a = 1;

if (true) var a = 2;

console.log(a);