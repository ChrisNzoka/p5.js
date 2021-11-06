function setup()
{
	//create a canvas for the robot
	createCanvas(500, 500);
}

function draw()
{
	strokeWeight(2);

	//robots head
	fill(250, 180, 500);
	rect(100, 100, 300, 300, 20);


	//robots antenna
	fill(250, 250, 0);
	ellipse(250, 70, 60, 60);

	fill(200, 0, 200);
	rect(210, 80, 80, 30);

	//robots eyes
	fill(245, 34, 450);
	ellipse(175, 200, 80, 80);
	point(175, 200);
	ellipse(325, 200, 80, 80);
	point(325, 200);


	//robots nose
	fill(0, 50, 0);
	triangle(250, 360, 200, 300, 300, 300);
    //robots nose 2
	fill(0, 50, 45);
	triangle(250, 200, 200, 300, 300, 300);
    
	//robots ears
	rect(80, 80, 30, 100);
	rect(390, 80, 30, 100);

	//robots mouth
	noFill();
	beginShape();
	vertex(175, 340);
	vertex(200, 370);
	vertex(225, 340);
	vertex(250, 370);
	vertex(275, 340);
	vertex(300, 370);
	vertex(325, 340);
	endShape();
}
