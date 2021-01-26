// в ФП дуже часто процедури будуть використовувати патерн "ланцюг" chaining
// ідея в тому що завди повертається об'єкт який можна перевикористати

const imagine = () => {
  const chain = function() {
    return this;
  };
  return {
    what: chain,
    can: chain,
    you: chain,
    achieve: chain,
  }
};

console.log('chaining example', imagine().what().can().you().achieve());

const expect = (value) => {
  const equals = (expected) => value === expected;

  return {
    to: { be: equals },
    equals: equals,
  }
};

console.log('expect chaining, is 2 === 2 ?', expect(2).to.be(2));
console.log('expect chaining, is 3 === 2 ?', expect(3).equals(2));

const add = (a) => b => b ? add(a + b) : a;

console.log('add chaining:', add(1)(1)(1)(1)(1)());
console.log('add chaining:', add(15)(5)(5)());

