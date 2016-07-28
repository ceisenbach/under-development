//a constructor function for creating a grid of lines
//the user can input the amount of rows in the grid and the size of each box

function grid (r,mag){


  this.update = function(){
    for(this.i = 0; this.i< r; this.i++){
      for(this.j = 0; this.j <r; this.j++){
      this.x = this.i * mag;
      this.y = this.j * mag;
      stroke(0);
      fill(255);
      rect(this.x,this.y,mag,mag);
      }
    }
  }
}
