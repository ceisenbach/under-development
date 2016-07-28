var grid;
var graphic;

function setup(){
  createCanvas(601,601);
  grid = new Grid(30,30,5);
  graphic = new GraphicGrid(30,30,5);
  //graphic.draw();
}

function draw(){
  graphic.draw();
}
