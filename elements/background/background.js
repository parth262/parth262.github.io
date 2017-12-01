function Heart(a,width,height) {
  this.img = a.loadImage('elements/background/images/heart.png');
  this.x = a.random(0,width);
  this.y = a.random(-500,-50);
  this.yspeed = a.random(3,7);

  this.fall = function() {
    this.y = this.y + this.yspeed;
    if(this.y > height) {
      this.y = a.random(-500,-50)
    }
  }

  this.show = function() {
    a.image(this.img,this.x,this.y,50,50);
  }
}
