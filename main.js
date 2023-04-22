canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 10;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;

}

function uploadBackground() {
	ctx.drawImage(greencar_img_tag , 0 , 0 , canvas.width , canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_img_tag , greencar_x , greencar_y , greecar.width , greencar.height);	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)

	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}

		
		if(keypressed == '40')
		{
			down();
			console.log("down");	
		}

	
		if(keypressed == '37')
		{
			left();
			console.log("left");
			}

		
			if(keypressed == '39')
		{
			right();
			console.log("right");
		}

function up()
{
	{
		if (greencar_y>= 0);

		greencar_y = greencar_y -10;
		console.log("When up arrow is pressed, x = " + greencar_x +" y = "+greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	{
		if (greencar_y<= 0);

		greencar_y = greencar_y +10;
		console.log("When up arrow is pressed, x = " + greencar_x +" y = "+greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	{
		if (greencar_x>= 300);

		greencar_x = greencar_x +10;
		console.log("When up arrow is pressed, y = " + greencar_x +" y = "+greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	{
		if (greencar_x<= 700);

		greencar_x = greencar_x -10;
		console.log("When up arrow is pressed, y = " + greencar_x +" y = "+greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}
