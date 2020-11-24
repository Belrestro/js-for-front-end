var a = 5;
var b = 2;

// Арифметичні

console.log('--- Arithmetical');
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Порівняння

var a = 2;
var b = '2';

console.log('--- Comparison')
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);
console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);


// Логічні
var a = true;
var b = false;
var c = 'Value assigned';

console.log('--- Logical')
console.log(a && a)
console.log(b && c);
console.log(a || c);
console.log(b || c);
console.log(!a);
console.log(!b);

// Присвоєння
var a = 1;
var b = 3;
var c;

console.log('--- Assignment')
a = b;
console.log(a); // a is 3
a += b;
console.log(a); // a is 6
a -= a;
console.log(a); // a is 0;
a = b;
a *= b;
console.log(a); // a is 9
a /= b;
console.log(a); // a is 3
a /= b;
console.log(a); // a is 1
a++;
a++;
console.log(a); // a is 3;
a--;
console.log(a); // a is 2;