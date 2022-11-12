
let str = '* Create * Develop * Art * Code * Artist * Instructor * Sketch * Design *  UI *  U X ';

let startAngle =    0;   
let distanceAngle = 360;  
let radius;                
let font;
let angle = 0;





function setup() {
  let canvas = createCanvas(windowWidth/3, windowHeight+100);
  canvas.parent('p5_sketch')
  radius = min(width,height) / 3;
  textSize(radius/6);
  textAlign(CENTER, BASELINE);
}


function draw() {
  background('black');

  noFill();
  noStroke()
  let c = circle(width/2,height/2, radius*2);
  
  // calculate the angle between each letter
  let angleBetweenLetters = radians(distanceAngle) / str.length;
 
  push();
  translate(width/2, height/2);      
  rotate(radians(startAngle));         // rotate to where text starts
  rotate(angle)
  for (let i=0; i<str.length; i++) {   // go through each letter in the text
    push();
    rotate(i * angleBetweenLetters);   // rotate to angle
    translate(0,-radius);              // and translate to edge of circle
    fill(255);
    noStroke();
    text(str[i], 0,0);                 // draw character at location
    pop();
  }
  pop();

  rotate()
  angle += radians(.4)
}





