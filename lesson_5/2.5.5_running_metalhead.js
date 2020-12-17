const margin = 15;
const width = window.innerWidth - margin * 2;
const height = window.innerHeight - margin * 2;

const directionsMap = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};
const size = 40;

const dude = document.createElement('img');
dude.src = './static/dude.gif';

dude.style.width = size + 'px';
dude.style.height = size + 'px';
dude.style.marginTop = height / 2 + 'px';
dude.style.marginLeft = width / 2 + 'px'
dude.style.height = size + 'px';
dude.style.transition = 'margin .5s';
dude.X = width / 2;
dude.Y = height / 2;

dude.setPosition = (x, y) => {
  let newX = dude.X + x;
  let newY = dude.Y + y;

  if ((newX + size) > width) {
    newX = width - size - margin;
  } else if (newX < 0) {
    newX = 0;
  }

  if ((newY + size) > height) {
    newY = height - size - margin;
  } else if (newY < 0) {
    newY = 0;
  }

  dude.X = newX;
  dude.Y = newY;
  dude.style.marginTop = newY + 'px';
  dude.style.marginLeft = newX + 'px';
}

function move() {
  const directions = [
    'up', 'down', 'left', 'right'
  ];
  const repeat = Math.random() > 0.04;
  const directionKey = directions[Math.floor(Math.random() * directions.length)]; // вибрати довільний напрямок
  const direction = directionsMap[directionKey];

  if (!repeat) {
    dude.setPosition(direction.x, direction.y);
    previous = direction;
    if (directionKey === 'right') {
      dude.style.transform = 'rotateY(180deg)';
    } else if (directionKey === 'left') {
      dude.style.transform = 'rotateY(0deg)';
    }
  } else if (previous) {
    dude.setPosition(previous.x, previous.y);
  }
}


document.body.appendChild(dude);

let timer;
let previous;

const doSomething = () => {
  timer = setTimeout(() => {
    move();
    doSomething();
  }, 0);
}

let stop = () => clearTimeout(timer);

doSomething()