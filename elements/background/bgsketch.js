//background of whole site
var canvas1 = function(b) {
  var h =[];
  var img;

  b.setup = function() {
    var canvasDiv = document.getElementById('background');
    width = canvasDiv.offsetWidth;
    height = canvasDiv.offsetHeight;
    var canvas = b.createCanvas(width,height).style('z-index','-10');
    img = b.loadImage('elements/background/images/heart.png');
    for(var i=0;i<150;i++) {
      h.push(new Heart(img,b,width,height));
    }
  };

  b.draw = function() {
    b.background(255,100,100);
    for(var i=0;i<h.length;i++) {
      h[i].fall();
      h[i].show();
    }
  };
};

mc = new p5(canvas1, 'background');
