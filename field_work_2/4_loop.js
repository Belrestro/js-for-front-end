const start = () => {
  const terra = new Terra(25, 400);
  const wallPoint = new Point(0,0);
  const plantPoint = new Point(12,12);
  const wall = new Wall(wallPoint);
  const plant = new Plant(plantPoint);

  terra.add(wallPoint, wall);
  terra.add(plantPoint, plant);
  terra.start();
}

start();