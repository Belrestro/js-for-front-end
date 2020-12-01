// об'єкти створені щоб можна було щось описати в цілому
// наприклад:
const car = { // машина
  type: 'ferrari',
  horsePower: 400,
  color: 'red'
};
const flat = { // апартаменти
  rooms: 2,
  volume: 70,
  coordinates: {
    lat: 50,
    lon: 50,
    city: 'Kiev',
    country: 'Ukraine',
  },
};
const bankAccount = { // банківський рахунок
  currency: 'USD',
  debit: 15000,
};

// а тепер уявіть що можна мати якись базовий об'єкт який описує щось в цілому
const animal = { // просто тварина
  kind: 'animal',
};
// потім можна його доповнювати так щоб він став чимось конкретнішим
animal.type = 'cat';
animal.kind = 'mamal';
animal.bonus = 'fluffy tail';
animal.voice = 'meow';
// можна сказати що з заготовки тварини ми створили кота
