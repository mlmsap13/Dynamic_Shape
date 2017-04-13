var bx;
var by;
var bw;
var bh;
var c;
var m;

function setup(){
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB);
  rectMode(CENTER);
  background(0,0,20);
  bx = windowWidth/2;
  by = windowHeight/2;
  bw = 30;
  bh = 30;
  c = 0;
}

function draw(){
  m = frameCount;
  c = 180*(sin(0.01*m))+180;
  if(c>346 && c<0)
  {m += 200}
  
  fill(c,100,100);
  rect(bx,by,bw,bh);

if(keyIsDown(DOWN_ARROW))
  bw -= 5;
if(keyIsDown(UP_ARROW))
  bh += 5;
if(keyIsDown(UP_ARROW))
  bw += 5;
if(keyIsDown(DOWN_ARROW))
  bh -= 5;
if(keyIsDown(87))
  by -= 10;
if(keyIsDown(83))
  by += 10;
if(keyIsDown(68))
  bx += 10;
if(keyIsDown(65))
  bx -= 10;

if(bw <= 0){
  bw = 0;
  bh = 0}
  
if(bx > windowWidth){
  bx = windowWidth}
if(bx < 0){
  bx = 0}
else if(by < 0){
  by = 0}
else if (by > windowHeight){
  by = windowHeight}

}
