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
 *    text, mouseX, mouseY,
 */

let backgroundColor, circle, mouse, can, dist;

function setup() {
  // Canvas & color settings
  can = createCanvas(windowWidth-20, windowHeight-20);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  // This variable contains a JSON object
  circle = {
    "x": random(width)-10,
    "y": random(height)-10,
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
  background(backgroundColor);
  ellipse(circle.x, circle.y, circle.w, circle.h);
  line(circle.x, circle.y, mouse.x, mouse.y);
  
  distance(circle, mouse);
}


function distance(p, p1) {
  let deltaX = p.x - p1.x;
  let deltaY = p.y - p1.y;
  dist = Math.round(Math.sqrt((deltaX ** 2) + (deltaY ** 2)));
  
  // backgroundColor = dist%360;
  
  text(`Dist between circle and mouse is ${dist}.`, 10, 10);
}

function mousePressed(can) {
  circle.x = random(circle.w/2, width-circle.w/2);
  circle.y = random(circle.w/2, height-circle.w/2);
}

function mouseMoved(can){
  mouse.x = mouseX;
  mouse.y = mouseY;
}