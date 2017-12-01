function Particle1(x,y) {
  this.pos = createVector(x,y);
  this.prev = this.pos;
  this.vel = p5.Vector.random2D();
  this.acc = createVector(0,0);
  
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  
  this.show = function() {
    var col = img.get(this.pos.x, this.pos.y);
    //console.log(col);
    strokeWeight(5);
    stroke(col[0], col[1], col[2], 100);    
    point(this.pos.x,this.pos.y);
    this.prev = this.pos;
  }
  
  this.attracted = function(target) {
    var force = p5.Vector.sub(target,this.pos);
    var dsq = force.magSq();
    dsq = constrain(dsq,25,50);
    var G = 10;
    var strength = G/dsq;
    force.setMag(strength);
    this.acc = force;
  }
}