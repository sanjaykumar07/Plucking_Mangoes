class stone {
  constructor(x, y, width, height) {
    var options = {
      isStatic: false,
      restitution: 0,
      friction: 1,
      density: 2,
    };

    this.body = Bodies.circle(x, y, 2);
    World.add(world, this.body);
    this.width = width;
    this.height = height;
    this.image = loadImage("stone.png");
  }

  display() {
    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);

    fill("blue");

    image(this.image, 0, 0, this.width, this.height);

    pop();
  }
}
