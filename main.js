canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var rover_width=100;
var rover_height=100;
var player_x=10;
var player_y=10;

background_image="racing.jpg";
rover_img="car1.png";

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

window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypress=e.keyCode;
    }
    if(keypress == '38'){
        up();
        console.log("up key pressed");
    }
    if(keypress == '40'){
        down();
        console.log("down key pressed");
    }
    if(keypress == '37'){
        left();
        console.log("left key pressed");
    }
    if(keypress == '39'){
       right();
        console.log("right key pressed");
   
}
function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function down()
{
	if(player_y <=500)
	{
		player_y = player_y + block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Down arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function left()
{
	if(player_x >0)
	{
		player_x = player_x - block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Left arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function right()
{
	if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
