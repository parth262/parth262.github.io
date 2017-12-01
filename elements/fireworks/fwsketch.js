var canvas3 = function(c) {
  var fireworks = [];
  var gravity,width,height;
  c.setup = function() {
    var canvasDiv = document.getElementById('fireworks');
    width = canvasDiv.offsetWidth;
    height = 500;
    c.createCanvas(width,height).style('border-radius', '5px');
    graity = c.createVector(0,0.2);
    c.background(0);
  };

  c.draw = function() {
    c.background(0,50);
    if(c.random(1) < 0.05) {
      fireworks.push(new Firework(c));
    }
    for(var i=fireworks.length-1;i>=0;i--) {
      fireworks[i].update();
      fireworks[i].show();
      if(fireworks[i].done()) {
        fireworks.splice(i, 1);
      }
    }
  };
};

mc = new p5(canvas3, 'fireworks');
