const map = [
  '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#',
  '#', '', '*', '', '', '', '', '', '*', '', '', '*', '*', '*', '#',
  '#', '', '*', '', '', '', '', '', '', '', '', '*', '', '*', '#',
  '#', '*', '*', '*', '', '', '*', '', '', '*', '*', '', '', '', '#',
  '#', '', '', '*', '', '', '*', '*', '', '', '', '', '', '', '#',
  '#', '', '', '', '', '', '', '-', '', '*', '*', '*', '*', '', '#',
  '#', '', '', '*', '', '', '', '', '*', '', '', '', '', '', '#',
  '#', '', '', '*', '', '', '', '', '', '+', '', '', '', '', '#',
  '#', '', '', '*', '', '', '*', '', '', '', '', '', '', '', '#',
  '#', '*', '', '', '', '*', '', '*', '', '', '', '', '', '', '#',
  '#', '*', '', '', '', '*', '*', '', '*', '', '', '', '', '*', '#',
  '#', '*', '', '', '*', '*', '', '', '', '', '', '', '', '*', '#',
  '#', '*', '*', '*', '', '*', '*', '', '', '*', '', '', '', '*', '#',
  '#', '*', '', '*', '*', '*', '*', '', '', '*', '*', '', '', '*', '#',
  '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#',
];

const init = () => {
  const configuration = {
    size: 15,
    background: 'sand',
    debug: true,
  };
  const terra = new Terra(configuration);
  const controls = new Controls(terra);

  terra.load(map);
  
  document.body.appendChild(controls.render());

  terra.draw();
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});
