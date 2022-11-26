let b,lyrics;

function setup() {
  b=color(0);
  createCanvas(windowWidth,windowHeight);
  background(b);  
  let col=color(170, 127, 245);
  let col2=color(23, 0, 43);
  let col3=color(201, 172, 22);
  let col4=color(132, 0, 255);
  let col5=color(157, 252, 182);
  let col6=color(255, 247, 0);

  
  let typeit = createInput();
  typeit.position(width/50,height/50);
  typeit.style('background-color',col);
  typeit.style('border-color',col2);
  typeit.style('width',width/2+'px');
  typeit.style('height',height/20+'px');
  typeit.style('color',col6);
  
  let button = createButton('Gibberish');
  button.position(width/50,height/10);
  button.style('background-color',col4);
  button.style('color',col5);

  button.mousePressed(function (){
    gibberish(typeit.value());
  });
  
  let buttonTwo= createButton('Clear');
  buttonTwo.position(width/5,height/10);
  buttonTwo.style('background-color',col4);
  buttonTwo.style('color',col5);
  buttonTwo.mousePressed(disappear);
  
  let title = createP('Gibberish :0');
  title.position(width/8,7*height/8);
  title.style('font-family','Courier');
  title.style('color',col3);
}

function draw() {


stroke(228, 212, 255);
strokeWeight(2);
rect(random(width),random(height),1,2);

let gib = 'Gibberish :0';
let gib2='';
for(let i=0;i<gib.length;i++){
  gib2+=gib.substring(i,i+1)+'\n';
}

push();
stroke(255, 252, 179);
textSize(6);
for(let i=0;i<gib2.length;i++){
  text(gib2,width/10+i*10,height/4+i*5);
}

pop();



}
 function gibberish(str){
  let splitStr = str.split('');
 
  
  let stringInit ='';
  let a=width/2;
  let b=height/2;
  for(let i=0;i<splitStr.length;i++){
    stringInit+=splitStr[i]+ 'ö'+splitStr[splitStr.length-(i+1)]+'y';
    stringInit.toLowerCase();
       
  }
  let brokenStr = '';
  while(stringInit.length>0){
    brokenStr+=stringInit.substring(0,45)+'\n';
    stringInit = stringInit.substring(45);
  }
  //text(brokenStr,3*width/5,height/25);
   lyrics = createP(brokenStr,3*width/5,height/25);
   lyrics.position(3*width/5,height/25);
   lyrics.style('color','rgb(132, 0, 255)');
   lyrics.style('font-family','Monaco');
  
}

function disappear(){
  clear();
  lyrics.html('');
  background(b);
}

function windowResized (){
  createCanvas(windowWidth,windowHeight);
  background(b);
}