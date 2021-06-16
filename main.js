canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var rover_width=100;
var rover_height=100;
var rover_x=10;
var rover_y=10;

background_image="mars.jpg";
rover_img="rover.png";

function ADD(){
background_imageTag=new Image();
background_imageTag.onload=UploadBackground;
background_imageTag.src=background_image;

rover_imgTag=new Image();
rover_imgTag.onload=uploadRover;
rover_imgTag.src=rover_img;
}

function UploadBackground(){
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);

}
function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",Mykeydown);

function Mykeydown(e){
    keypress=e.keyCode;
    console.log("The Key pressed is :"+keypress);
}