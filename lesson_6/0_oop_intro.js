// До цього моменту ми вирішували декілька завдань по створенню об'єктів
// та створювали "схожі" об'єкти
// що таке "схожі"

// функція порівняння "схожості"
const isSameObject = (a, b) => {
	if (typeof a !== 'object' || typeof b !== 'object') {
		throw new Error('a or b is not an object');
	}
	const keys1 = Object.keys(obj1);
	const keys2 = Object.keys(obj2);
	if (keys1.length !== keys2.length) {
		return false; // кількість ключів у об'єктах різна - не схожі
	}
	for (let i=0;i<keys1.length;i++) { // перебираємо по ключам першого об'єкта - не має мати значення
		const key = keys1[i];
		if (obj1[key] !== obj2[key]) {
			return false; // якщо хоча б одна властивість не співпадає - не схожі
		}
	}

	return true; // схожі
}

// "схожі" - це не ідентичні

const obj1 = {
	a: 1,
	b : '2'
};
const obj2 = {
	a: 1,
	b: '2'
};
console.log('чи ідентичні obj1, obj2', obj1 === obj2); // ні
console.log('чи cхожі obj1, obj2', isSameObject(obj1, obj2)); // так

// в цілях цього уроку давайте визначимо поняття "клонування"
// нам потрібно буде "клонувати" дані

const cloneObject = (obj) => { // беремо прототип
	const newOne = {}; // починаємо з пустого об'єкта

	for (const key in obj1) {
		newOne[key] = obj[key]; // записуємо всі властивості "прототупу" в новий об'єкт
	}
	return newOne;
}
const obj1Cloned = cloneObject(obj1);
console.log('Чи це той самий об\'єкт', obj1 === obj1Cloned); // ні, і добре
console.log('Чи він "схожий"', isSameObject(obj1, obj1Cloned)); // так, ну і чудово


// "колнування" - це створення ідентичних даних без зміни освних
// даємо якісь дані які треба клонувати, отримуємо схожий "екземпляр"