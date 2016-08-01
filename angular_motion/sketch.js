var r = 160
var angle;
var aVel = 0.0;
var aAcc;// = .0001;
var slider;

function setup() {
	createCanvas(640,360);
	slider = createSlider(-.0001,.0001,0,.00005);
	angle = PI/4;



}

function draw() {

  background(150,150,20);
  fill(0);
  stroke(0);
	aAcc = slider.value();
  //text("mousepressed moves fast, keypressed slows down",50,50,50,100);
  translate(width/2,height/2);
  var x = r*cos(angle);
  var y = r*sin(angle);
  fill(200);
  stroke(255);
  line(0,0,x,y);
  ellipse(x,y,50,50);

  angle += aVel;
  aVel += aAcc;
}

/*
function mousePressed(){
	aAcc += .00005;
}

function keyPressed(){
	aAcc -= .00005;
}

function drawAxes(){
  line(width/2,0,width/2,height)
  line(0,height/2,width,height/2)
}
*/
