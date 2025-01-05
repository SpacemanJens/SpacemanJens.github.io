let shared;
let speed = 5;

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

function draw() {
  background("#ffcccc");
  fill('red');

   // Check if arrow keys are being held and update position
  if (keyIsDown(LEFT_ARROW)) {
    shared.x -= speed; // Move left
  }
  if (keyIsDown(RIGHT_ARROW)) {
    shared.x += speed; // Move right
  }
  if (keyIsDown(UP_ARROW)) {
    shared.y -= speed; // Move up
  }
  if (keyIsDown(DOWN_ARROW)) {
    shared.y += speed; // Move down
  }
  ellipse(shared.x, shared.y, 200, 300);
}
