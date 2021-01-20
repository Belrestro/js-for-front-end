// у класів (функцій) є декілька цікавих властивостей які можна використовувати

// 1 - instanceof

class Animal {}

class Octopus extends Animal {}

const animal = new Animal();
const octopus = new Octopus();

// оператор instanceof може сказати це екземпляр був створений цим класом

const tableOfInheritance = {
	'is animal created by Animal class': animal instanceof Animal,
	'is octopus created by Octopus class': octopus instanceof Octopus,
	'is octopus created by Animal class': octopus instanceof Animal, // так - бо наслідування
	'is animal created by Octopus class': animal instanceof Octopus,
}

console.table(tableOfInheritance);

// такі речі дають змогу робити висновки про приналежність екземпляру

// 2 - constructor

// у кожному екземплярі зберігається відсилка на сам класс

console.log('class of animal', animal.constructor);
console.log('class of octopus', octopus.constructor);



// 3 - у класів є ім'я

console.log('Octopus.name', Octopus.name);

// 4 - у класів є той самий прототип

class Horse extends Animal {
	makeSound() {
		console.log('I\'m a horse'); 
	}
}

console.log('Horse prototype', Horse.prototype);

// 5 - у кожного екземпляру є ссилка на той самий прототип

const horse = new Horse();

console.log(Object.getPrototypeOf(horse));
console.log(Object.getPrototypeOf(horse) === Horse.prototype);