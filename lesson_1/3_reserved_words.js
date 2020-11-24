// Переключення

switch (true) {
	case 1 === 1:
		console.log('Capitain obvous');
		break;
	default:
		break;
}

// Класс

class Terror extends Error {
	constructor() {
		super();
	}
}

// Змінні

var a = 1;
const b = 2;
let c = 3;

// Цикл та умови

for (const character of 'String123') {
	if (character === '1') {
		break; 
	} else {
		console.log(character);
		continue;
	}

	console.log('this block never executed');
}

// функції

function n() {}
async function f() {}
function *g() {
	yield 1;
}

// помилки

throw new Error('finished');