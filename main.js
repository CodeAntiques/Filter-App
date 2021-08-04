function preload(){}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(650,350);
    video=createCapture(VIDEO);
    video.hide();
    tint_color=""
}

function draw(){
    image(video,0,0,640,480);
    tint(tint_color)
}

function Apply(){
    tint_color=document.getElementById("tint_color").value;
}

function Take_snapshot(){
    save("Your Selfie.jpeg");
}