// break

for (let i = 0; i < 10; i++) {
  console.log('1 - Iteration of cycle', i);
  if (i === 4) break;
}

// continue

for (let i = 0; i < 10; i++) {
  console.log('2 - Iteration of cycle', i);
  if (i === 8) continue;
}

// return

const func = () => {
  for (let i = 0; i < 10; i++) {
    console.log('3 - Iteration of cycle', i);
    return 'ok';
  }
}

func();

// throw

for (let i = 0; i < 10; i++) {
  console.log('4 - Iteration of cycle', i);
  if (i > 4) throw 'error';
}