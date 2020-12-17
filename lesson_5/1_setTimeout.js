const button = document.createElement('button');
const buttonText = 'Відмінити вибух';
let timer;

button.innerHTML = buttonText;

const handler = () => {
  clearTimeout(timer);
  button.innerHTML = 'Світ врятований';
};

const startCountdown = (i) => {
  timer = setTimeout(() => {
    if (i < 0) {
      document.body.innerHTML = 'Бабах';
      return;
    }
    button.innerHTML = i + ' ' + buttonText;
    startCountdown(i - 1);
  }, 1000);
}

button.addEventListener('click', handler);
document.body.appendChild(button);
startCountdown(4);

const timer = setTimeout(() => {
  console.log('Not going to happen');
}, 1000);

clearTimeout(timer);
