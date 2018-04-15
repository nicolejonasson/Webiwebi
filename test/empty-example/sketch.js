let angle = 0;
let img;

function preload(){
  img = loadImage("images/1.JPG");
}


function setup() {
  createCanvas(500,400,WEBGL);
  background(150);
}

function draw() {
  background(150);
  ambientLight(100);
  directionalLight(255,255,255,1,-1,0);
  rotateX(angle);
  rotateY(angle*1.3);
  rotateZ(angle*0.7);
  //rect(0,0,150,150);
  box(100);


  angle += 0.07;

}
