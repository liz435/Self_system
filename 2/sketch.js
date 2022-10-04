
//  const density = ".:-i|=+%O#@"

//Core
let video;
let input=[];
let searchInput = "      HNIOBhwioqdnio"

 const density = searchInput + ';.:\░▒▓█';

 let asciiDiv;
 
 function preload(){
  // video = loadImage('2001.png');
 video = createCapture(VIDEO);
 }

 function setup() {
  var canvas = createCanvas(300, 300);
  canvas.parent('canvasForHTML');


  // canvas.parent('canvasForHTML');
  

  // inputs = createInput("2020");
  // inputs.input();
  // inputs.position(0, 0);
  // inputs.size(100);

   video.size(340,180);
   asciiDiv = createDiv();
  
 }
 
 function draw() {

    // video.resize(350,350);
   video.hide();
   video.loadPixels();
   let asciiImage = " ";
   for (let j = 0; j < video.height; j++) {
     for (let i = 0; i < video.width; i++) {
       const pixelIndex = (i + j * video.width) * 4;
       const r = video.pixels[pixelIndex + 0];
       const g = video.pixels[pixelIndex + 1];
       const b = video.pixels[pixelIndex + 2];
       const avg = (r + g + b) / 3;
       const len = density.length;
       const charIndex = floor(map(avg, 0, 255, 0, len));
       const c = density.charAt(charIndex);
       if (c == " ") asciiImage += ("&nbsp;");
       else asciiImage += c;
     }
     asciiImage += '<br/>';
   }
   asciiDiv.html(asciiImage);
 }
 