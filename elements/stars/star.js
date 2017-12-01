function Star(x,y,a) {
  this.x = x;
  this.y = y;
  this.w;

  this.blink = function() {
     this.w = a.random(1,5);
  }

  this.show = function() {
    a.noStroke();
    a.fill(255);
    a.ellipse(this.x,this.y,this.w,this.w);
  }
}
