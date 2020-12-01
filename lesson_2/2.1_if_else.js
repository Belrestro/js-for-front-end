let counter = 0;

const count = () => {
  counter++;

  return false;
}

if (count()) {
  console.log('smth');
} else if (count()) {
  console.log('smth else');
}

console.log(counter);