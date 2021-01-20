const object1 = {
  value: 123,
  readValue: () => object1.value,
  writeValue: (val) => object1.value = val,
};
const object2 = {
  values: '1',
  readValue: () => '1',
  writeValue: (val) => object1.value = val,
};
// console.log(object1.readValue());
// console.log(object2.readValue());
const selectRandom = (array) => array[
  Math.floor(
    Math.random() * array.length
  )
];
// const object = selectRandom([object1, object2]);
// console.log(object.readValue());
const createObject = (readValue, writeValue) => {
  return (value) => ({
    value: value,
    readValue: readValue,
    writeValue: writeValue,
  })
};
const factoryObject = [];
const readValue = function() {
  return this.value;
};
const writeValue = function(value) {
  return this.value = value;
};
const objectFactory = createObject(readValue, writeValue);

for (let i=0;i<4;i++) {
  const object = objectFactory(i);
  factoryObject.push(object);
}

// const object = selectRandom([object1, object2].concat(factoryObject));
// console.log(object.readValue());

const example = {
  value: null,
  readValue: readValue,
  writeValue: writeValue,
};

const cloneObject = (object) => {
  const keys = Object.keys(object);

  return () => {
    const newObject = {};

    for (const key of keys) {
      newObject[key] = object[key];
    }

    return newObject;
  };
};
const clonedObjects = [];
const cloneFactory = cloneObject(example);

for (let i=0;i<4;i++) {
  const object = cloneFactory();
  object.value = i ** 2;
  clonedObjects.push(object);
}

console.log(selectRandom(clonedObjects));

class NewObject {
  constructor(value) {
    this.value = value;
  }

  readValue() {
    return this.value;
  }
  writeValue(value) {
    return this.value = value;
  }
}

class NewObject1 extends NewObject {
  readValue() {
    return null;
  }

  tryToChangeValue() {
    return false;
  }
}



console.log(new NewObject1(123));