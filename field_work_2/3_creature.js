const selectRandom = (array) => array[
  Math.floor(
    Math.random() * array.length
  )
];

class Creature {
  constructor(point) {
    this.coordinates = point;
  }

  action() {
    throw new Error('action not implemented');
  }
}

class Wall extends Creature {
  type = 'wall';
  symbol = '#';

  action(terra) {} 
}

class Plant extends Creature {
  type = 'plant';
  symbol = '*';
  energy = 20;

  action(terra) {
    if (this.energy < 1) return;
    this.energy += 3;

    if (this.energy > 60) {
      const availablePoints = [];
      for (let x = -1; x < 2; x++ ) {
        for (let y = -1; y < 2; y++ ) {
          const newPoint = this.coordinates.add(new Point(x, y));
          
          if (terra.grid.isAvailable(newPoint)) {
            availablePoints.push(newPoint);
          }
        }
      }
      const point = selectRandom(availablePoints);

      if (point) {
        const creature = new Plant(point);

        terra.add(point, creature);
        this.energy = 30;
      }
    }
    if (this.energy > 60) this.energy = 60;
  }
}