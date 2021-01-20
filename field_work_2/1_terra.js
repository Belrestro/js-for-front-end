class Terra {
  constructor(size, step) {
    this.grid = new Grid(size);
    this.step = step;
    this.steps = 0;
    this.creatures = [];
  }

  add(point, creature) {
    this.grid.place(point, creature);
    this.creatures.push(creature);
  }

  remove(creature) {
    const point = creature.coordinates;
    this.grid.remove(point);
    const creatures = [];

    for (const c of this.creatures) {
      if (c === creature) continue;
      creatures.push(c);
    }

    this.creatures = creatures;
  }

  start() {
    this.interval = setInterval(() => {
      for (const creature of this.creatures) {
        creature.action(this);
      }
      // remove dead creatures
      for (const creature of this.creatures) {
        if (creature.energy < 1) {
          this.remove(creature);
        }
      }
      this.draw();
      this.steps++;
    }, this.step);
  }

  draw() {
    let result = '';

    for (let x = 0; x < this.grid.width; x++ ) {
      for (let y = 0; y < this.grid.height; y++ ) {
        const point = new Point(x, y);
        const object = this.grid.get(point);

        result += (object && object.symbol) || '_';
      }
      result += '</br>';
    }

    document.body.innerHTML = result;
  }

  stop() {
    clearInterval(this.interval);
  }
}