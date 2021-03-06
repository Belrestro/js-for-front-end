// Що таке ООП - об'єктно орієнтоване програмування
// об'єкто орієнтованість це здатність вирішувати поставлені задачі з допомогою об'єктів

// Принципи на яких базується ООП
// -- ІНКАПСУЛЯЦІЯ
// -- АБСТРАКЦІЯ
// -- ПОЛІМОРФІЗМ
// -- НАСЛІДУВАННЯ

const taskSolver = {};

// самі по собі об'єкти не вирішують ніяких задач але їхній вміст - вирішує

taskSolver.toPower = (number, exponent) => number ** exponent; // приводить до  ступеня
taskSolver.repeat = (func, times) => {
	for (let i = 0; i < times; i++) {
		func();
	}
} // повторює виклик функції "times" разів

// цей об'єкт переносить у собі корисні функції які можна передавати та переназначати
// він буде приховувати внутрішню складність всередині даючи змогу користуватися тільки корисними частинами
// це називаєтся: !!!ІНКАПСУЛЯЦІЯ!!!

// також об'єкти переносять у собі унікальні для них властивості які можуть визначати його роботу

const passport = {
	id: 1,
	name: 'Andrew',
	surname: 'Vorobiov',
	country: 'UA',
	travelHistory: ['UA'],
}; // щось що ідентифікує окрему людину
const travel = (passport, pointA, pointB) => {
	if (pointA === pointB) return passport; // не можна подорожувати в одне і те ж місце
	const lastPoint = passport.travelHistory[passport.travelHistory.length - 1];
	if (lastPoint !== pointA) return passport; // не можна подорожувати з місця де ти не знаходишся
	passport.travelHistory.push(pointB); // записуємо візіт

	return passport;
}

travel(passport, 'UA', 'DE'); // УКРАЇНА - НІМЕЧИНА
travel(passport, 'DE', 'IE'); // НІМЕЧИНА - ІРЛАНДІЯ
travel(passport, 'IE', 'UA'); // ІРЛАНДІЯ - УКРАЇНА

console.log(passport.travelHistory); // історія перебувань окремого громадянина

// групування властивостей в об'єкті це абстракція, ми говоримо про цей об'єкт як про набір властивостей 
// і одне ціле одночасно
// це називаєтся !!!АБСТРАКЦІЯ!!!

const otherPassport = {
	id: 2,
	name: 'Dan',
	surname: 'Abramov',
	country: 'RU',
	travelHistory: ['RU'],
};

travel(otherPassport, 'RU', 'CN'); // РОСІЯ - КИТАЙ
travel(otherPassport, 'CN', 'NK'); // КИТАЙ - ПІВНІЧНА КОРЕЯ
travel(otherPassport, 'NK', 'IN'); // ПІВНІЧНА КОРЕЯ - ІНДІЯ

console.log(otherPassport.travelHistory);

// якщо створити ще один пасспорт "схожий" по формі, але різний по властивостям
// суть в тому що відносно інщого у них однаковий набір властивостей
// АЛЕ ми можемо вести себе з одинм - ідентично іншому
// (дуже легко бачати внутрішню структуру об'єкта коли він створений так), в реальності про структуру ви частіше здогадуєтесь аніж знаєте

// це називаєтся !!!ПОЛІМОРФІЗМ!!!

// створювати "схожі" по формі об'єкти вручну це не дуже еффективно, зробіть це 100 разів і вам більше не захочеться
// але це дуже зручно отримувати абстрактні, поліморфічні та інкапсульовані об'єкти
// що якщо я скажу...
// що вся мова JS настроєна допомагати вам, причому дуже різними способами

// наприклад:

const objectFactory = (prototype) => {
	return () => {
		const newOne = {}; // починаємо з пустого об'єкта

		for (const key in prototype) {
			newOne[key] = prototype[key]; // записуємо всі властивості "прототупу" в новий об'єкт
		}
		return newOne;
	}
}

const createChicken = objectFactory({
	type: 'bird',
	kind: 'chicken',
	makeSound: () => 'kria',
});

console.log('Курочка', createChicken());
console.log('Ще Курочка', createChicken());
console.log('І ще одна Курочка', createChicken());
console.log('Не ідентині "схожі" курочки', createChicken() === createChicken());

// можливість створювати нові об'єкти використовуючи прототип називається 
// !!!НАСЛІДУВАННЯ!!!