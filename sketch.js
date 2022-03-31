/**
 * demonstrates how to load a GIF image using
 * createImg to create an <img> on the page
 * and to use that to update animation
 * (and illustrates how p5's loadImage loads only
 * one frame otherwise).
 */

var mouseDist;
var gif_1;
var gif_2;
var imgx=50;
var imgy=50;

function preload() {
  gif_1 = createImg("vegetables.gif");
  gif_2 = createImg("chem.gif");
}

function setup() {
  createCanvas(windowWidth, 700);
  gif_1.hide();
  gif_2.hide();
  background(0);
}

function draw() {
  gif_1.show();

  // updates animation frames by using an html
  // img element, positioning it over top of
  // the canvas.
  gif_1.position(imgx, imgy);
  gif_2.position(imgx, imgy);
  mouseDist = dist(imgx,imgy,mouseX,mouseY)
  console.log(mouseDist);
if(mouseIsPressed && mouseDist<=100){
  gif_2.show();
  gif_1.hide();
   }
  else{
  gif_2.hide();
  gif_1.show();
}
}

