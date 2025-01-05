let shared;

function preload() {
	partyConnect(
		"wss://demoserver.p5party.org", 
		"hello_party"
	);
  shared = partyLoadShared("shared", { x: 100, y: 100 });
}

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function mousePressed() {
  shared.x = mouseX;
  shared.y = mouseY;
}

function keyPressed() {
  // Move the circle based on the arrow key pressed
  if (keyCode === LEFT_ARROW) {
    shared.x -= 10; // Move left
  } else if (keyCode === RIGHT_ARROW) {
    shared.x += 10; // Move right
  } else if (keyCode === UP_ARROW) {
    shared.y -= 10; // Move up
  } else if (keyCode === DOWN_ARROW) {
    shared.y += 10; // Move down
  }
}

function draw() {
  background("#ffcccc");
  fill("#000066");

  ellipse(shared.x, shared.y, 200, 300);
}
