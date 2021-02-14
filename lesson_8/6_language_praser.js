const codeSample = `
  CALCULATE 1 + 1
  STORE A
  CALCULATE A + 12
  STORE A
  LOG A
  LOG 12 + 12
  LOG 'DOG'
`;

const interpretLine = (command, arguments) => {
  switch (command) {
    case 'CALCULATE':
      return `stack.push(${arguments.join('')})`;
    case 'STORE':
      return `global['${arguments[0]}'] = stack.pop()`;
    case 'LOG':
      return `console.log(${arguments.join('')})`;
    default:
      return '';
  }
}

const transpile = (code) => {
  let transpiled = 'const stack = [];'
  const lines = code.split('\n');

  for (const line of lines) {
    const [command, ...arguments] = line.trim().split(' ');
    transpiled += interpretLine(command, arguments) + '\n'; 
  }

  return transpiled
}

const translated = transpile(codeSample);
console.log(translated);
eval(translated);