//a constructor function for creating a grid of lines
//the user can input the amount of rows in the grid and the size of each box

function Grid (_r,_inc,_c){


  this.draw = function(){
    var n = 0;

    for(var y = 0; y <= _r;y ++){
      stroke(0);

      if(n == _c){
       stroke(color('red'));
       n = 0;
      }

      line(0,y*_inc,width,y*_inc);

      n++;

    }
    
    for(var x = 0; x <= _r; x ++){
      stroke(0);

      if(n == _c){
       stroke(color('red'));
       n = 0;
      }

      line(x*_inc,0,x*_inc,height);

      n++;
    }
  }
}
