let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

let posicaoHorizontal12; // x
let posicaoVertical12; //y


function setup() {
  createCanvas(400, 400);
  background("pink")
  cor= color (random(255), random(255), random(255));
  posicaoHorizontal = 0;
  posicaoVertical = 200;
}

function draw() {   
  if (mouseIsPressed) {
  fill(cor)
  circle(posicaoHorizontal, posicaoVertical,50);
}

                 
if (mouseIsPressed)  {
cor = color(random(255), random(255), random(255));
}

posicaoHorizontal+= random(0, 3);
posicaoVertical+= random(-3, 3);
 }