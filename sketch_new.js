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




let array;
let posArray = [];
let isSentence = false;
let currentText, currentImage;
// Load the image.
function preload() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  currentText = urlParams.get('m');
  const url = new URL(urlParams.get('i'));
  currentImage = url.pathname.substring(1);
  currentImage = currentImage.split("_")[0];
  array = currentText.split(" ")

  console.log(currentImage, currentText)
  frame = loadImage('/frame.png');
  if(currentImage == "1") {
    img1_6 = loadImage('/1_6.png');
    img1_5 = loadImage('/1_5.png');
    img1_4 = loadImage('/1_4.png');
    img1_3 = loadImage('/1_3.png');
    img1_2 = loadImage('/1_2.png');
    img1_1 = loadImage('/1_1.png');
  } else if(currentImage == '2') {
    img2_6 = loadImage('/2_6.png');
    img2_5 = loadImage('/2_5.png');
    img2_4 = loadImage('/2_4.png');
    img2_3 = loadImage('/2_3.png');
    img2_2 = loadImage('/2_2.png');
    img2_1 = loadImage('/2_1.png');
  } else if(currentImage == '3') {
    img3_6 = loadImage('/2_6.png');
    img3_5 = loadImage('/3_5.png');
    img3_4 = loadImage('/3_4.png');
    img3_3 = loadImage('/3_3.png');
    img3_2 = loadImage('/3_2.png');
    img3_1 = loadImage('/3_1.png');
  } else if(currentImage == '4') {
    img4_8 = loadImage('/4_8.png');
    img4_7 = loadImage('/4_7.png');
    img4_6 = loadImage('/4_6.png');
    img4_5 = loadImage('/4_5.png');
    img4_4 = loadImage('/4_4.png');
    img4_3 = loadImage('/4_3.png');
    img4_2 = loadImage('/4_2.png');
    img4_1 = loadImage('/4_1.png');
  }
  
  
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

  if(currentImage == "1") {
  image(img1_1, 600, 325, 1200, 650);
  image(img1_2, mouseX / 10 +600, 325, 1200, 650);
  image(img1_3, mouseX / 8 +500, 325, 1200, 650);
  image(img1_4, mouseX / 6 +400, 325, 1200, 650);
  image(img1_5, mouseX / 5 +400, 325, 1200, 650);
  image(img1_6, mouseX / 4 +700, 325, 1200, 650);
  } else if (currentImage == '2') {
    image(img2_1, 600, 325, 1200, 650);
    image(img2_2, mouseX / 10 +600, 325, 1200, 650);
    image(img2_3, mouseX / 8 +500, 325, 1200, 650);
    image(img2_4, mouseX / 6 +400, 325, 1200, 650);
    image(img2_5, mouseX / 5 +400, 325, 1200, 650);
    image(img2_6, mouseX / 4 +700, 325, 1200, 650);
  } else if (currentImage == '3') {
    image(img3_1, 600, 325, 1200, 650);
    image(img3_2, mouseX / 10 +600, 325, 1200, 650);
    image(img3_3, mouseX / 8 +580, 325, 1200, 650);
    blendMode(OVERLAY);
    image(img3_4, mouseX / 4 +400, 325, 1200, 650);
    blendMode(NORMAL);
    image(img3_5, mouseX / 5 +400, 325, 1200, 650);
  } else if (currentImage == '4') {
    image(img4_1, 600, 325, 1200, 650);
    blendMode(OVERLAY);
    image(img4_2, mouseX / 10 +600, 325, 1200, 650);
    blendMode(OVERLAY);
    image(img4_3, mouseX / 8 +580, 325, 1200, 650);
    blendMode(DODGE);
    image(img4_4, mouseX / 4 +600, 325, 1200, 650);
    blendMode(OVERLAY);
    image(img4_5, mouseX / 15 +600, 325, 1200, 650);
    blendMode(NORMAL);
    image(img4_6, mouseX / 6 +600, 325, 1200, 650);
    image(img4_7, mouseX / 3 +300, 325, 1800, 975);
    image(img4_8, mouseX / 2 +250, 425, 800, 433);
  }

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