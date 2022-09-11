star_sound = "";
harry_sound = "";

function preload(){
    star_sound = loadSound("ringtones-star-wars.mp3");
    harry_sound = loadSound("ringtones-harry-potter.mp3");
}

function setup(){
    canvas = createCanvas(500, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 500, 450);
}