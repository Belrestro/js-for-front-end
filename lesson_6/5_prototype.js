// у прототипа класу та екземпляру є тісні взаємини
// коли створюється клас створюється і прототип об'єкту

class Computer {
	constructor(type) {
		this.type = type;
	}

	says(replic) {
		console.log(this.type, ' says: ', replic);
	}
}

const pc = new Computer('PC');
const mac = new Computer('MAC');
const raspberryPI = new Computer('RaspberryPI');

pc.says('It is time to buy windows license');
Computer.prototype.says('I don\' know who am I');

// якщо щось поміняєтся у прототипі...
// ці ж зміни мають дійти і до екземплярів

Computer.prototype.confirms = function(statement) {
	console.log(this.type, ' confirms that: ', statement);
}

pc.confirms(' PC is superior gaming platform');
raspberryPI.confirms(' it is pretty good micro computer');

// таким чином можна навіть заміняти властивосі всії об'єктів (минулих і майбутніх)
Computer.prototype.says = (statement) => {
	console.log('Hacker says: ', statement);
}

mac.says('mac has been hacked');

