/* ____    ___       _      _       ____  
  / ___|  / _ \     / \    | |     / ___| 
 | |  _  | | | |   / _ \   | |     \___ \ 
 | |_| | | |_| |  / ___ \  | |___   ___) |
  \____|  \___/  /_/   \_\ |_____| |____/ 
                       
Exploring some concepts, not creating a thing.

  ____    _____   ____    _____   _____    ____   _   _ 
 / ___|  |_   _| |  _ \  | ____| |_   _|  / ___| | | | |
 \___ \    | |   | |_) | |  _|     | |   | |     | |_| |
  ___) |   | |   |  _ <  | |___    | |   | |___  |  _  |
 |____/    |_|   |_| \_\ |_____|   |_|    \____| |_| |_|

The concepts in today's lesson could be used to make a dozen things,
but here are some ideas if you need inspiration.

1) A Marco Polo game, where you can click to see how far away you are
   from the goal.
2) Warmer, colder, where the background changes through many more shades
   of red through green to show how close you are to a collectible.
3) An art piece that changes hue based on the mouse position.
4) An Operation style game, where you have to move from one side of the
   screen to the other without stumbling over invisible objects.
*/

// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global
 *    createCanvas
 *    colorMode,
 *    HSB,
 *    background,
 *    ellipse,
 *    random,
 *    width,
 *    height,
 *    windowWidth, windowHeight,
 *    rect, line,
 *    text, mouseX, mouseY, textSize,
 */

let backgroundColor, circle, mouse, can, dist, temp, max;

function setup() {
  // Canvas & color settings
  can = createCanvas(windowWidth-20, windowHeight-20);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  // This variable contains a JSON object
  circle = {
    "x": random(10, width-10),
    "y": random(10, height-10),
    w: 20,
    h: 20,
  }
  
  mouse = {
    x: random(width),
    y: random(height),
    w: 20,
    h: 20,
  }
}

function draw() {
  background(backgroundColor, 40, 80);
  ellipse(circle.x, circle.y, circle.w, circle.h);
  line(circle.x, circle.y, mouse.x, mouse.y);
  
  distance(circle, mouse);
  
  hotOrCold();
}

function distance(p, p1) {
  let deltaX = p.x - p1.x;
  let deltaY = p.y - p1.y;
  dist = Math.sqrt((deltaX ** 2) + (deltaY ** 2));
  
  //textSize(10);
  // text(`Dist between circle and mouse is ${dist}.`, 10, 10);
}

function mousePressed(can) {
  circle.x = random(circle.w/2, width-circle.w/2);
  circle.y = random(circle.w/2, height-circle.w/2);
  
  maxDist(circle);
}

function maxDist(p){
  let x = 0, y = 0;
  
  if(p.x > width/2){
    if(p.y < height/2) y = height;
  }else{
    if(p.y < height/2) x = width;
    else{
      x = width;
      y = height;
    }
  }
  
  let deltaX = x - p.x;
  let deltaY = y - p.y;
  max = Math.sqrt((deltaX ** 2) + (deltaY ** 2));
}

function mouseMoved(can){
  mouse.x = mouseX;
  mouse.y = mouseY;
  
  backgroundColor = dist*360/max;
}

function hotOrCold(){
  if(dist<width/6) temp = "Sizzle sizzle!";
  else if(dist<=2*width/5) temp = "Hot!";
  else if(dist<=3*width/5) temp = "Warm.";
  else if(dist<=4*width/5) temp = "Cool.";
  else temp = "Cold!";
  
  textSize(30);
  text(`${temp}.`, 15, 40);
}