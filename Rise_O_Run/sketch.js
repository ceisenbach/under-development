//linear equation
var equation;
var xSpacing;
var points = 40;

var mSlider; //slope slider
var bSlider; //y-intercept slider

var mSliderLabel; //labels for our sliders
var bSliderLabel;

var dx;
var x = 0;
var yValues;

var m = 1;
var b = 1;

function setup(){
  frameRate(10);
  canvas = createCanvas(700,500);
  canvas.parent("sketch-holder");

  equation = createP("y = ");
  equation.position(50,20);
  equation.parent('sketch-holder');

  mSlider = createSlider(-50,50,1,1);
  mSlider.position(50,80);
  mSlider.parent('sketch-holder');

  bSlider = createSlider(-50,50,0,1);
  bSlider.position(50,120);
  bSlider.parent('sketch-holder');

  mSliderLabel = createP("Slope");
  mSliderLabel.position(10,64);
  mSliderLabel.parent('sketch-holder');
  bSliderLabel = createP("y-intercept");
  bSliderLabel.position(200,104);
  bSliderLabel.parent('sketch-holder');

  var w = width;
  xSpacing = width/points;
  dx = xSpacing/points;

  yValues = new Array(floor(w/xSpacing));

}

function draw(){
  background(255);

  push();
  stroke(0);
  line(0,height/2,width,height/2);
  line(width/2,50,width/2,height-50);
  pop();

  m = mSlider.value();
  b = bSlider.value();

  calcLine();

  renderFunction();

  omega = Math.abs(mSlider.value());
  equation.html("<p>y = "+
  getsign(mSlider.value())+" "+abs(mSlider.value())+ "x" +
  " " + getsign(bSlider.value()) + " " + abs(bSlider.value())
  );

}

function getsign(number){
  if(number >= 0){
    return "+";
  }
  if(number < 0){
    return "-";
  }
}

function calcLine(){
  x = -(dx/2)* points;

  for(var i = 0; i <yValues.length; i++){
    yValues[i] = -1*(m*x + b);
    x +=dx;
  }
}

function renderFunction() {
  noStroke();

  for(var x = 2; x < yValues.length -3; x++){
    fill(0);
    ellipse(x*xSpacing, height/2 +yValues[x],5,5);
  }

  push();
  noFill();
  strokeWeight(2)
  if(m == 1){stroke(240,20,20)}
  if(m < 0){stroke(20,20,240)}
  if(m > 0 && m!=1){stroke(20,240,20)}
    beginShape();
    for(var x = 0; x < yValues.length; x +=2){
      //vertex(x*xSpacing,height/2 + yValues[x]);
      curveVertex(x*xSpacing,height/2 + yValues[x]);
      //rOr(dx);
      }
    endShape();
    pop();

}
/*
function rOr (x){
    strokeWeight(5);
    line(0,height,0,-x);
    translate(0,x);
    if(x > 18) {
      push();
      rotate(PI);
      rOr(x);
      pop();
    }
}
*/
