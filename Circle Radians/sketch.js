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

    //noFill();
    //so we draw the circle only once
    arc(0,0,d,d,angle,0);
    //if(angle <)
    strokeWeight(2);
    fill(0,100,100);
    stroke(0,100,100);
    arc(0,0,d,d,TWO_PI-1,0);
    fill(200,0,200);
    stroke(200,0,200);
    arc(0,0,d,d,TWO_PI-2,TWO_PI-1);
    fill(200,200,200);
    stroke(200,200,200);
    arc(0,0,d,d,TWO_PI-3,TWO_PI-2);
    fill(0);
    stroke(0);
    strokeWeight(3);
    arc(0,0,d,d,PI,TWO_PI-3);
    //ellipse(x,y,5,5);
    angle -= aVel;
    //constrain(angle,-TWO_PI,0);
  //}
  //else {
  //  stroke(0,50,255);
  //  ellipse(0,0,r*2,r*2);
  //}
}
