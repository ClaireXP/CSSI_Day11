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
 *    collidePointCircle, noCursor,
 */

let backgroundColor, circle, mouse, can, dist, temp, max;
let circleSize = 30;

function setup() {
  // Canvas & color settings
  can = createCanvas(windowWidth - 20, windowHeight - 20);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  // This variable contains a JSON object
  circle = {
    x: random(circleSize/2, width - circleSize/2),
    y: random(circleSize/2, height - circleSize/2),
    w: circleSize,
    h: circleSize,
  };

  mouse = {
    x: random(width),
    y: random(height),
  };
  
  noCursor();
  distance(circle, mouse);
  maxDist();
  backgroundColor = (dist * 250) / max;
}

function draw() {
  background(backgroundColor, 40, 80);
  distance(circle, mouse);
  hotOrCold();
}

function distance(p, p1) {
  let deltaX = p.x - p1.x;
  let deltaY = p.y - p1.y;
  dist = Math.sqrt(deltaX ** 2 + deltaY ** 2);
}

function mousePressed(can) {
  if(collidePointCircle(mouseX, mouseY, circle.x, circle.y, circle.w)){
    circle.x = random(circle.w / 2, width - circle.w / 2);
    circle.y = random(circle.w / 2, height - circle.w / 2);
    
    maxDist();
  }
}

function maxDist() {
  let x = 0, y = 0;

  if (circle.x > width / 2) {
    if (circle.y < height / 2) y = height;
  } else {
    if (circle.y > height / 2) x = width;
    else {
      x = width;
      y = height;
    }
  }

  let deltaX = x - circle.x;
  let deltaY = y - circle.y;
  max = Math.sqrt(deltaX ** 2 + deltaY ** 2);
}

function mouseMoved(can) {
  mouse.x = mouseX;
  mouse.y = mouseY;

  backgroundColor = (dist * 250) / max;
}

function hotOrCold() {
  if (dist < max / 6) temp = "Sizzle sizzle!";
  else if (dist <= max / 3) temp = "Hot!";
  else if (dist <= max / 2) temp = "Warm.";
  else if (dist <= (2 * max) / 3) temp = "Cool.";
  else temp = "Cold!";

  textSize(30);
  text(`${temp}.`, 15, 40);
}
