var img;
var particles = [];
var attractors = [];

function setup() {
  img = loadImage("images/azka3c.JPG");
  createCanvas(800,600);
  createP("Soooo... That was my surprise.. Hope you enjoyed it.. ").style("font-size","20px");
  for(var i=0;i<100;i++) {
    particles.push(new Particle1(random(width),random(height)));
  }
  attractors.push(new createVector(width/2,height/2));
  attractors.push(new createVector(100,100));
  attractors.push(new createVector(700,100));
  attractors.push(new createVector(100,500));
  attractors.push(new createVector(700,500));
  attractors.push(new createVector(50,50));
  attractors.push(new createVector(750,50));
  attractors.push(new createVector(50,550));
  attractors.push(new createVector(750,550));

  background(51);
}

function draw() {
  var rand = 0;
  if(random(1) < 0.01) {
    rand = floor(random(9));
  }
  for(var i = 0; i < particles.length; i++) {
    particles[i].attracted(attractors[rand]);
    particles[i].update();
    particles[i].show();
  }
}
