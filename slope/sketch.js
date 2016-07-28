var xSpacing; //distance between each horizontal location
var points = 40; //
var dx;   //value for incrementing x
var yValues;  //array to calculate the y-values of the primary function

var amplitude = 75; //heigth of the wave
var x1,y1,x2,y2; //coordinates for slopeLine

var mValues; //array to calculate the slope values
var dm;  //delta for slope;
var dmSlider; //delta x (for slope) slider;
var m;  //slope

//var grid;

//use constrain function!!!!

function setup(){
  //frameRate(10)
  createCanvas(640,360);
  //dmSlider = createSlider(.1,4,2,.1);
  //grid = new grid(width/10,10);


  var w = width;
  xSpacing = width/points;
  dx = xSpacing/points;
  mValues = new Array(floor(w/xSpacing));
  yValues = new Array(floor(w/xSpacing));

}





function draw(){

//dm = dmSlider.value();
dm = 10;

background(255);

push();
  stroke(0);
//  grid.update();
//  gridUpdate();
  //line(0,height/2,width,height/2);
  //line(width/2,0,width/2,height);
pop();

calcWave();
renderWave();

calcSlope();
renderSlope();
push();
stroke(0);
strokeWeight(2);
//line(x1,y1,x2,y2);
noStroke();
r= mouseX;
r = map(mouseX,0,width, 0,dx*yValues.length);
var w = Math.sin(r)*amplitude ;
fill(200,100,0,100);
ellipse (mouseX,height/2+w,15,15);
pop();
/*push();
translate(mouseX,mouseY);
stroke(0);
strokeWeight(5);
line(x1,y1,x2,y2);
noStroke();
fill(200,100,0,100);
ellipse (0,0,15,15);
pop();*/
}

function calcWave(){
  var x = 0;

   for (var i = 0; i < yValues.length; i++) {
     yValues[i] = Math.sin(x)*amplitude;
     x+=dx;
  }
}
function renderWave(){
  push();
  stroke(0);
  noFill();
  beginShape();
  for (var x = 0; x < yValues.length; x++) {
    //  map(x,0,width,0,100);
    //var y = 6; // some function of x
    curveVertex(x*xSpacing, height/2 +yValues[x]);

    //ellipse(mouseX,height/2 +yValues[x],15,15);
  }
  endShape();
  pop();
}
function calcSlope(){
  x1 = (mouseX+dm);
  x2 = (mouseX-dm);
  x1 = map(mouseX+dm,0,width, 0,dx*yValues.length);//attempt to do something similar to line 63
  x2 = map(mouseX-dm,0,width, 0,dx*yValues.length);//attempt to do something similar to line 63

  //x1= constrain(0,100+dm);
  //x2= constrain(0,100-dm);
  y1 = height/2 + Math.sin(x1)*amplitude;
  y2 = height/2 + Math.sin(x2)*amplitude;
  m = ((y1-y2)/(dm*2))*20;

  var x = -(dx/2)*points;
  for(var i = 0; i < mValues.length; i++ ){
    mValues[i] = (m*x );
    x += dx;
  }

  /*var x = 0;
  for(int i = 0; i < mValues.length; )*/
}
function renderSlope(){
  //noStroke();

  push();
  rectMode(CENTER);
  noStroke();
  fill(200,20,200,50);
  ellipse(x1,y1,5,5); //for figuring out if its actually working like its supposed to
  ellipse(x2,y2,5,5)
  pop();
  push();
  noFill();
  //r= mouseX;
  //r = map(mouseX,0,width, 0,dx*yValues.length);
  //var w = Math.sin(r)*amplitude ;
  //translate(0,height/2 + w);
  beginShape();
  for(var x = 0; x <yValues.length; x +=1){
    curveVertex(x*xSpacing,height/2 +mValues[x]);
  }
  endShape();
  pop();
}

/*function gridUpdate (){
  var col = 25;
  var row = 25;


    for(var i = 0; i<col; i++){
      for(var j = 0; j <row; j++){
      var x = i * 30;
      var y = j * 30;
      //stroke(0);
      //fill(255);
      rect(x,y,30,30);
    }
  }
}
*/
