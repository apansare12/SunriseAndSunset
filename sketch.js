const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg; 
var sunrise1Img, sunrise2Img, sunrise3Img, sunrise4Img, sunrise5Img, sunrise6Img;
var sunset7Img, sunset8Img, sunset9Img, sunset10Img, sunset11Img, sunset12Img;
var bg ;
var hour,minute; 

function preload() {
    // create getBackgroundImg( ) here
    sunrise1Img  = loadImage("sunrise1.png");
    sunrise2Img  = loadImage("sunrise2.png");
    sunrise3Img  = loadImage("sunrise3.png");
    sunrise4Img  = loadImage("sunrise4.png");
    sunrise5Img  = loadImage("sunrise5.png");
    sunrise6Img  = loadImage("sunrise6.png");
    sunset7Img  = loadImage("sunset7.png");
    sunset8Img  = loadImage("sunset8.png");
    sunset9Img  = loadImage("sunset9.png");
    sunset10Img  = loadImage("sunset10.png");
    sunset11Img  = loadImage("sunset11.png");
    sunset12Img  = loadImage("sunset12.png");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    getBackgroundImg(); 
    
 
if (backgroundImg)
    {
    background(backgroundImg);
    }

    textSize(20);
    fill("white");
    stroke("white");
    text("Time: " + hour + ":" + minute,50,40);
    
    Engine.update(engine);

    // write code to display time in correct format here
    //    

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Australia/Sydney");
    //console.log (response);

    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;

    // write code slice the datetime
    hour = datetime.slice(11,13);
    minute = datetime.slice(14,16);
        
    
    // add conditions to change the background images from sunrise to sunset
    if(hour==0 && hour<=03){
        bg = sunset11Img
     }
    else if(hour>=04 && hour<=06){
        bg = sunrise1Img;
    }else if(hour>=06 && hour<=08){
        bg = sunrise2Img;
    }else if(hour>=09 && hour<=12){
        bg = sunrise3Img;
    }else if(hour>=13 && hour<=16){
        bg = sunset8Img;
    }else if(hour>=17 && hour<=20){
        bg = sunset10Img;
    }else{
        bg = sunset12Img;
    }

    //load the image in backgroundImg variable here
    backgroundImg = bg;
    
}
