
let str = '* Create * Develop * Art * Code * Artist * Instructor * Sketch * Design *  UI *  UX ';

let startAngle =    0;   
let distanceAngle = 360;  
let radius;                
let font;
let angle = 0;

function setup() {
  let canvas = createCanvas(windowWidth/2, windowHeight);
  canvas.parent('p5_sketch')
  radius = min(width,height) / 4;
  textSize(radius/8);
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
  rotate(radians(startAngle));         
  rotate(angle)
  for (let i=0; i<str.length; i++) {   
    push();
    rotate(i * angleBetweenLetters);  
    translate(0,-radius);              
    fill(255);
    noStroke();
    text(str[i], 0,0);                 
    pop();
  }
  pop();

  rotate()
  angle += radians(.4)
}





