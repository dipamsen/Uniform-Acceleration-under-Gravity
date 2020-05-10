//Created by Dipam Sen
//Fun Planet
//Physics >> Uniform Acceleration Under Gravity Simulator
var object;
var timer = 0;
var u;
var v;
var uval;
var h;
var hs;
var hval;

function setup() {
  frameRate(60);
  createCanvas(600, 600);
  object = new Thing(300, 160, 20, 20, 0);
  textSize(20);
  textFont("Comic Sans MS");
  u = createSlider(-100, 100, -20, 10);
  hs = createSlider(10, 120, 60, 2);
  uval = -1 * u.value();
  hval = hs.value();
  console.log((80 - height) / 4);
}

function draw() {
  background(255, 0, 0);
  object.display();
  u.position(30, 100);
  hs.position(400, 100);
  h = height - object.position.y;
  textSize(15);
  text("Choose Initial Velocity (u)",10, 20);
  text("Choose Height (h)",400, 20);
  text("-100", 15, 60);
  text("100", 150, 60);
  text("10", 400, 60);
  text("120", 510, 60);
  textSize(20);
  text("u = " + u.value() + " m/s", 200, 40);
  text("h = " + -1 * hs.value() + " m", 200, 20);
  if (uval !== -1 * u.value() || hval !== hs.value()) {
    object.reset();
    timer = 0;
    object.velocity = -1 * u.value() / 15;
    uval = -1 * u.value();
    hval = hs.value();
  }
  if (object.collides() == false) {
    object.accelerate();
    object.move();
    timer++;
    update();
    text("Velocity: " + round(object.velocity * 15) + " m/s", 10, 100);
    text("Time: " + round(timer / 60) + " sec", 10, 130);
    text("Height: " + round(h/20)*5 + " m", 10, 160);
    

  } else {
    text("v = " + -1 * round(object.velocity * 15 / 5) * 5 + " m/s", 200, 60);
    text("t = " + round(timer / 60) + " sec", 200, 80);
  }
  //console.log(object.position.y);
  //console.log(object.collides(), object.position.y);
}

function update() {

}
