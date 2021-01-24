const FOLDER = './textures';
const textures = {
  'death'   : 'Death.png',
  'grass'   : 'Grass.png',
  'ground'  : 'Ground.png',
  'mountain': 'Mountain.png',
  'plant'   : 'Plant.png',
  'sand'    : 'Sand.png',
  'sheep'   : 'SatanSheep2.png',
  'tiger'   : 'Tiger2.png',
  'wall'    : 'Wall.png',
  'wall2'   : 'Wall.tif'
};

class Texture {
  constructor(type) {
    const texture = textures[type];

    if (!texture) {
      throw new Error('Texture does not exist ' + type);
    }

    this.path = [FOLDER, texture].join('/');
    // ['./textures', 'Death.png'], './textures/Death.png'
  }

  static dimensions(width, height) {
    Texture.width = width;
    Texture.height = height;
  }

  render() {
    const div = document.createElement('div');

    div.style.width = Texture.width + 'px';
    div.style.height = Texture.height + 'px';
    div.style.display = 'inline-block';

    div.style.background = 'url(' + this.path + ')';
    div.style.backgroundSize = '100%';

    return div;
  }
}

// Texture.dimensions()

// const instance = new Texture('tiger');

// instance.render();