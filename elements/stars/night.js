//canvas for moon and stars
var canvas2 = function(a) {
  var s = [];
  var width,height;
  var img;

  a.setup = function() {
    var canvasDiv = document.getElementById('night');
    width = canvasDiv.offsetWidth;
    height = 500;
    a.createCanvas(width,height).style('border-radius', '5px');
    img = a.loadImage("images/azkac.png");
    for(var i=0;i<200;i++) {
      var x = a.random(0,width);
      var y = a.random(0,height);
      s.push(new Star(x,y,a));
    }
  };

  a.draw = function() {
    a.background(0)
    for(var i=0;i<s.length;i++) {
      s[i].show();
      s[i].blink();
    }
    a.image(img,width/2-50,height/2-50,100,100);
    a.fill(240,150);
    a.ellipse(width/2,height/2,100,100);

  };
};

mc = new p5(canvas2, 'night');
