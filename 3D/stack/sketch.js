let canvas;
let love;




function setup() {
  canvas= createCanvas(2200,windowHeight+100,WEBGL);
  // canvas.position(0,0);
  canvas.position(0,0);
  canvas.parent("canvasContainer");
  canvas.style("z-index","-1");
  //
  // love = createGraphics(400,400);
  // love.fill(0);
  // love.textAlign(CENTER);
  // love.textSize(150);
  // // love.textFont(ct);
  // // love.font(CT)
  // love.text("library",200,200);


}

function draw(){
  background(255);

  let rotateMouse = (mouseX * 0.01);
  let mouse= mouseY-100;

  for (let x = -0; x<50; x+=50){
    push();
    translate(x*mouse,x,mouse);
    rotateY(rotateMouse);
    fill(250,250,250,0.5);
    strokeWeight(1);
    box(200);
    pop();

  }

  translate(100,mouseY);

}