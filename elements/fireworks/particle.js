function Particle(x,y,color,firework,c) {
  this.pos = c.createVector(x,y);
  this.firework = firework;
  this.lifespan = 255;
  if(this.firework) {
    this.vel = c.createVector(0,c.random(-15,-10));
  }
  else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(c.random(10,30));
  }

  this.acc = c.createVector(0,0);

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    if(!this.firework) {
      this.vel.mult(0.9);
      this.lifespan -= 4;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.done = function() {
    if(this.lifespan < 0) {
      return true;
    }
    else {
      return false;
    }
  }

  this.show = function() {
    if(!this.firework) {
      c.stroke(color[0],color[1],color[2],this.lifespan);
      c.strokeWeight(c.random(1,4));
    }
    else {
      c.stroke(color[0],color[1],color[2]);
      c.strokeWeight(5);
    }
    c.point(this.pos.x,this.pos.y);
  }
}
