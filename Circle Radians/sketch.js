var r = 150;
var d = r*2;
var angle;
var aVel;


function setup(){
  createCanvas(640,360);
  angle = 0;
  aVel = .01;
}

function draw(){
  background(255);
  //add a counter here so it goes around only once;
  translate(width/2,height/2);
  text(frameCount,0,0);
  //if(frameCount <= 1000){
    var x = r*cos(angle);
    var y = r*sin(angle);
    stroke(255,0,50);
    line(0,0,x,y);
    fill(0,255,100);
    stroke(0,255,100);
    ellipse(0,0,7,7)
    ellipse(x,y,7,7);
    stroke(0,50,255);
    noFill();
    //so we draw the circle only once
    arc(0,0,d,d,0,angle);
    strokeWeight(2);
    stroke(0,100,100);
    arc(0,0,d,d,r,0);
    //stroke(200,0,200);
    //arc(0,0,d,d,2*r,r);
    //stroke(200,200,200);
    //arc(0,0,d,d,3*r,r);
    //stroke(0);
    //arc(0,0,d,d,PI,r);
    //ellipse(x,y,5,5);
    angle += aVel
  //}
  //else {
  //  stroke(0,50,255);
  //  ellipse(0,0,r*2,r*2);
  //}
}
