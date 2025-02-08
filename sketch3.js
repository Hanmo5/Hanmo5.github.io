//future reference: https://www.openprocessing.org/sketch/163034/

//https://www.openprocessing.org/sketch/960955

var smallX;
var medX;
var lrgX;
let img, img2;
let x;
let goLeft = false;
let y;
let numbers = ['10','20','30','40','50','60','70','80','90','100','110','120','130','140','150','160','170','180','190','200','210','220','230','240','250','260','270','280','290','300'];
let choice;




const array = ['The','footsteps','between','us','measure','how','much','you','mean','to','me']
let posArray = [];
let isSentence = false;
// Load the image.
function preload() {
    frame = loadImage('/frame.png');
    img6 = loadImage('/2_6.png');
    img5 = loadImage('/3_5.png');
    img4 = loadImage('/3_4.png');
    img3 = loadImage('/3_3.png');
    img2 = loadImage('/3_2.png');
    img1 = loadImage('/3_1.png');
}
function setup() {
  createCanvas(1200, 650);
  noStroke();
  smallX = random(width/5,width/2);
  medX = random(width/5,width/2);
  lrgX = random(width/8,width/2);
  x =  random(0,700);
  y =  random(0,100);
  choice = random(numbers);
  array.forEach((word)=>{
    posArray.push({x: random(100,600), y: random(0,300), word: word, goLeft: false, speed: random(1, 10)})
  })
  console.log(posArray)
  /*
  

  array.forEach((word, index)=>{
    const obj = new Word(word, index);
    objects.push(obj)
  })
  
  let x = 40;
  */
}

function draw() {
  background("grey");
  imageMode(CENTER);
  
  image(img1, 600, 325, 1200, 650);
  image(img2, mouseX / 10 +600, 325, 1200, 650);
  image(img3, mouseX / 8 +580, 325, 1200, 650);
  blendMode(OVERLAY);
  image(img4, mouseX / 4 +400, 325, 1200, 650);
  blendMode(NORMAL);
  image(img5, mouseX / 5 +400, 325, 1200, 650);
  //image(img6, mouseX / 4 +450, 325, 1200, 650);
  


  fill(239,174,244);
 
  textSize(30);
  //textFont("journal", sans-serif);
  posArray.forEach((obj, index)=>{
    if(isSentence) {
      text(obj.word, (countLetters(obj.word) * 50)*index, 300);
    } else {
      text(obj.word, obj.x, obj.y);
    }
    if(obj.goLeft == false){
      obj.x += obj.speed;
    }
    if(obj.goLeft == true){
      obj.x -= obj.speed;
    }
    if(obj.x>1250){
      obj.goLeft= true;
    }
    if(obj.x<-300){
      obj.goLeft= false;
    }
  })

  
  image(frame, mouseX / 3 +400, 325, 1800, 650);
  

}
function mousePressed(){
  isSentence = !isSentence;
}

function countLetters(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char.match(/[a-zA-Z]/)) { // Check if the character is a letter
      count++;
    }
  }
  return count;
}