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
 */

let backgroundColor, spherePosition, rectPosition

function setup() {
  // Canvas & color settings
  createCanvas(500, 400);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  // This variable contains a JSON object
  spherePosition = {
    "x": 100,
    "y": 100
  }
}

function draw() {
  background(backgroundColor);
  ellipse(spherePosition.x, spherePosition.y, 20, 20);
  // rect(rectPosition.x, rectPosition.y, 20, 20);
  // line(spherePosition.x, spherePosition.y, rectPosition.x, rectPosition.y);
}

function mousePressed() {
  spherePosition.x = random(width);
  spherePosition.y = random(height);
}