const obj = {}; // це простий об'єкт =)
const person = { // це об'єкт зі стандартними властивостями
  name: 'Andrew',
  age: null,
  '_name': 'Andrew'
};

// об'єкт формуєтся парами [key]: [value] ключ дані
// такі пари розділяются комами
// об'єкт це як сховище для змінних


console.log(person); // вони гарненько виглядають у браузерній консолі
console.log(obj + ''); // і поганенько перетворюются у рядок

// дістати його власивості дуже просто

console.log(person.name); // через крапку
console.log(person['age']); // або через квадратні дужки
// !!! ALARMA !!!
console.log(obj['age']); // якщо спробувати дістати властивість якої немає то повернется undefined
// а от у null та undefined властивостей немає, і вони будуть кидати помилку

// покласти йому властивості дуже просто

person.age = 27; // так само як і дістаємо тільки ще й присвоюємо

person.showAge = function () { // функція всередині об'єкта - це метод =)
  return this.age; // об'єкт об'єднує дані, він може знати сам про себе у методах через ключове слово this
}

console.log(person.showAge()); // метод це функція яка відносится до об'єтка (в цьому випадку словом this)

person.makeOlderBy = function (amount) { // робимо старше
  this.age = this.age + amount; // методи також можуть змінювати "внутрішній" стан об'єкта
}

person.makeOlderBy(1);

console.log(person.age);

person.property = {
  house: null,
  tree: undefined,
  car: {
    type: 'ok car',
  },
};

// також у об`єктах можуть бути інші об'єкти, їх властивості так само дістаются через крапку або дужки

console.log(person);
console.log(person.property.car.type);
console.log(person['property']['car']['type']);
