// створіть клас Vehicle
// - йому можна задавати type - рядок (при створенні)
// - йому можна задавати fullCapacity - число від 1 до 4 (при створенні)
// - має властивість currentCapacity - число від 0 до 4
// - має властивість passengers - масив
// - має метод який onboard який приймає рядок і "садить" пасажира в транспорт
// (додає в масив ім'я)
// - має метод has який приймає рядок і повертає булівське значення
// (якщо в транспорті "є" пассажир)
// - якщо в транспорті пасажирів === fullCapacity то нових пасажирів він не "примає"

const assert = (message, statement) => {
  if (statement === false || statement === undefined || statement === null) {
    throw new Error(message);
  }
}
class Vehicle {
  constructor() {}

  onboard(name) {}

  has(name) {
    // return this.passengers.includes(name);
  }
}

const vehicle = new Vehicle('bike', 1);

// тести
// assert('має бути пустий', vehicle.currentCapacity === 0);

// vehicle.onboard('Drew');

// assert('має мати 1 пасажира', vehicle.currentCapacity === 1);
// assert('має мати конкретного', vehicle.has('Drew') === true);
// assert('не має мати іншого пасажира', vehicle.has('Nancy') === false);

// vehicle.onboard('Sue');
// vehicle.onboard('Dan');

// assert('має мати 1 пасажира', vehicle.currentCapacity === 1);
// assert('має мати конкретного', vehicle.has('Drew') === true);