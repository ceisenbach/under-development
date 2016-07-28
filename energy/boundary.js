// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A fixed boundary class

  // A boundary is a simple rectangle with x,y,width,and height
function Boundary(/*x_,y_, w_, h_*/) {
  // But we also have to make a body for box2d to know about it
  // Body b;

  //this.x = x_;
  //this.y = y_;
  //this.w = w_;
  //this.h = h_;
  var xspacing = 16;    // Distance between each horizontal location
  var w = width + 16;                // Width of entire wave
  var theta = 0.0;      // Start angle at 0
  var amplitude = 75.0; // Height of wave
  var period = 500;   // How many pixels before the wave repeats
  var dx = (TAU/period)* xspacing;               // Value for incrementing x
  var yvalues = new Array(floor(w/xspacing));  // Using an array to store height values for the wave
  var x = .02;

  this.boundary = [];

  for(var i = 0; i < yvalues.length; i++){
    yvalues[i] = sin(x)* 75;
    x +=dx;

  }
  for (var i = 0; i < yvalues.length;i++){

    this.boundary.push(new box2d.b2Vec2(i*xspacing,height/2 +yvalues[i]));

  }

  for (var i = 0; i < this.boundary.length; i++) {
    this.boundary[i] = scaleToWorld(this.boundary[i]);
  }
  var chain = new box2d.b2ChainShape();
  chain.CreateChain(this.boundary,this.boundary.length);

  var fd = new box2d.b2FixtureDef();
  fd.shape =chain;
  fd.density = 1.0;
  fd.friction = 0.5;
  fd.restitution = 0.2;

  var bd = new box2d.b2BodyDef();
  this.body = world.CreateBody(bd);

  //bd.type = box2d.b2BodyType.b2_staticBody;
  //bd.position.x = scaleToWorld(this.x);
  //bd.position.y = scaleToWorld(this.y);
  //fd.shape = new box2d.b2PolygonShape();
  //fd.shape.SetAsBox(this.w/(scaleFactor*2), this.h/(scaleFactor*2));
  this.body.CreateFixture(fd);

  // Draw the boundary, if it were at an angle we'd have to do something fancier
  this.display = function() {
    push();
    strokeWeight(1);
    stroke(200);
    noFill();
    beginShape();
    for(var i = 0; i < this.boundary.length; i++){
      var v = scaleToPixels(this.boundary[i]);
      curveVertex(v.x,v.y);
    }
    vertex(width,height);
    vertex(0,height);
    endShape();
    pop();
  };
}
