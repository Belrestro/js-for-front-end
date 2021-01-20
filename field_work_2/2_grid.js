class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(point) {
    return new Point(this.x + point.x, this.y + point.y);
  }
}

class Grid {
  constructor(size) {
    this.width = size;
    this.height = size;
    this.grid = new Array(size ** 2).fill(null);
    // const grid = [];
    // for (let i = 0; i < size ** 2; i++) {
    //   grid.push(null);
    // }
    // this.grid = grid;
  }

  getIndexOfPoint(point) {
    const isOnGrid = point
      && point.x > -1
      && point.x < this.width
      && point.y > -1
      && point.y < this.height;

    if (!isOnGrid) {
      throw new Error('Point is not on grid');
    }

    return this.width * point.y + point.x;
  }

  isAvailable(point) {
    const isOnGrid = point
      && point.x > -1
      && point.x < this.width
      && point.y > -1
      && point.y < this.height;
    if (!isOnGrid) return false;
    const index = this.getIndexOfPoint(point);
    
    return this.grid[index] === null;
  }

  place(point, object) {
    const index = this.getIndexOfPoint(point);

    if (this.grid[index] !== null) {
      throw new Error('This point is occupied');
    }

    this.grid[index] = object;
  }

  get(point) {
    const index = this.getIndexOfPoint(point);

    return this.grid[index];
  }

  remove(point) {
    const index = this.getIndexOfPoint(point);

    this.grid[index] = null;
  }
}