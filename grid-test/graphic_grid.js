//a constructor function for creating a grid of lines
//the user can input the amount of rows in the grid and the size of each box

function GraphicGrid (_r,_inc,_c){

  var pg = createGraphics(width,height);
  pg.background(255);

  this.draw = function(){
    var n = 0;

    for(var y = 0; y <= _r;y ++){
      pg.stroke(0);

      if(n == _c){
       pg.stroke(color('red'));
       n = 0;
      }

      pg.line(0,y*_inc,width,y*_inc);

      n++;

    }

    for(var x = 0; x <= _r; x ++){
      pg.stroke(0);

      if(n == _c){
       pg.stroke(color('red'));
       n = 0;
      }

      pg.line(x*_inc,0,x*_inc,height);

      n++;
    }
  }
  image(pg,20,20,100,100);
}
