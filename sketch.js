
const WIDTH =400;
const HEIGHT = 400;
const VILOCITY=1.5;
const COLORS=["red","violet","yellow","lightgreen","tomato","lightblue","black","salmon","brown","grey","orange"];
let squares=[];
let color="red";
let CORDONNATES=[
  WIDTH/2-90-8,
  WIDTH/2-30-4,
  WIDTH/2+30
];
function setup() {
   createCanvas(WIDTH,HEIGHT);
 /** cleate elments **/
 
}

function draw() {
if(frameCount%((60/VILOCITY)*5)==0)color=random(COLORS);
  
  
if(frameCount%(60/VILOCITY)==0){
  /** cleate elments **/
  for(let i=0;i<3;i++){
  squares.push(new element(CORDONNATES[i], -10,random(COLORS)))
   }

}
   background(color);
  for(let i=squares.length-1;i>=0;i--){
  squares[i].display();
  squares[i].update(VILOCITY,color);
    if(squares[i].y>height)
      squares.splice(i,1);
    if(squares[i].lose){ alert("lose");
      noLoop();}
   
  }
}
  
function mousePressed() {
  
  for(e of squares){
    if(
      mouseX>=e.x && 
      mouseX <= e.x+e.width &&
      mouseY>=e.y &&
      mouseY <= e.y+e.height) 
      {
        if(e.color==color)
         e.color="white";
      else 
        e.lose = true;}
  }
  
}
















