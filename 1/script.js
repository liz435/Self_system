let loadedJSON = null;
let content;

let inputSearch;
let submitSearch=[];

function setup() {
canvas = createCanvas(1200, 800);
background(130,129,130);
textSize(22);

text("Click on the button below to load JSON from file", 20, 20);


submitSearch = createButton("submit");
submitSearch.position(900,180);
submitSearch.mousePressed(submit);

inputSearch = createInput("google");
inputSearch.position(400,180);

}

function submit(){
  loadJSONFile();
  content = inputSearch.value();
  // content = content.toLowerCase();
  
}

function loadJSONFile() {
// Load the JSON from file
loadedJSON = loadJSON('BrowserHistory.json', onFileload);
}

function onFileload() {
text("File loaded successfully...", 30, 100);
let stored = [];
console.log(loadedJSON["Browser History"].length)
  for (let i=0; i<loadedJSON["Browser History"].length;i++){
    textSize(15);

    if (loadedJSON["Browser History"][i].url.includes(content) == true){
    
    text( i+1 + " Title: " + loadedJSON["Browser History"][i].title + "        Page transition: " + loadedJSON["Browser History"][i].page_transition + "          URL:"+loadedJSON["Browser History"][i].url ,30, 140 +i *40)
  
      stored=loadedJSON["Browser History"][i].tittle;
      console.log(loadedJSON["Browser History"][i].url);
  }
  
}
}