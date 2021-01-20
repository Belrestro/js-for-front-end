// для того щоб зрозуміти що таке наслідування 
// треба почати з "базового класу"
class Animal {
	type = 'animal';
};

// слово extends означає що Rabbit наслідується від Animal
class Rabbit extends Animal {
	kind = 'rabbit';
}
// тепер у "дочірнього" класу є всі властивості базового класу і власні властивості

const rabbit = new Rabbit();

console.log('object type', rabbit.type);
console.log('object kind', rabbit.kind);

class Chicken extends Animal {
	kind = 'chicken'; // можна переписувати базові властивості власними
	// ("базовий" класс не постраждає, зміни стосуються тільки дочірнього)

	constructor(gender) {
		super(); // коли ви наслідуєтесь і визначаєте конструктор
		// потрібно викликати функцію super (щоб все було супер)
		// функція super - це constructor базового об'єкту
		this.type = gender === 'girl' ? 'rooster' : 'han';
	}
}

const rooster = new Chicken();
const han = new Chicken('girl');

console.log(rooster);
console.log(han);