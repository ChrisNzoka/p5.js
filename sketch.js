function setup()
{
	//create a large square canvas
	createCanvas(800, 800);
}

function draw()
{
    {
    //left long rectangle
        fill(255,0,0);
        strokeWeight(12);
    rect(-10, 100, 110, 500);        
    }
    
    {
    //Left centre square
        fill(255,255,0);
        strokeWeight(12);
    rect(100, 100, 400, 400);
    }
    
    {
    //right centre square
        fill(0,0,255);
        strokeWeight(12);
    rect(500, 100, 250, 250);
    }
    
    {
    //right long
        fill(220,220,220);
        strokeWeight(12);
    rect(750, -10, 100, 610);
    }
    
    {
    //below right centre square:left one
        fill(220,220,220);
        strokeWeight(12);
    rect(500, 350, 125, 150);
    }
    
    {
    //below right centre square: right one
        fill(225,255,0);
        strokeWeight(12);
    rect(625, 350, 125, 150);
    }
    
    {
    //top right
        fill(220,220,220);
        strokeWeight(12);
    rect(-10, -10, 210, 110);
    }
    
    {
    //Top left centre
        fill(255,0,0);
        strokeWeight(12);
    rect(200, -10, 300, 110);
    }
    
    {
    //Top right centre
        fill(0,0,255);
        strokeWeight(12);
    rect(500, -10, 250, 110);
    }
    
    {
    //Bellow leftt centre square:left
        fill(255,0,0);
        strokeWeight(12);
    rect(100, 500, 200, 100);
    }
    
    {
    //Bellow left centre square:right
        fill(255,0,0);
        strokeWeight(12);
    rect(300, 500, 200, 100);
    }
    
    {
    //Below right centre square: skip twin
        fill(0,0,0);
        strokeWeight(12);
    rect(500, 500, 250, 100);
    }
    
    {
    //Bottom left
        fill(0,0,255);
        strokeWeight(12);
    rect(-10, 600, 110, 210);
    }
    
    {
    //Beside bottom left: Top
        fill(255,255,0);
        strokeWeight(12);
    rect(100, 600, 200, 100);
    }
    
    {
    //bottom left centre
        fill(220,220,220);
        strokeWeight(12);
    rect(100, 700, 200, 110);
    }
    
    {
    //Bottom right
        fill(255,255,0);
        strokeWeight(12);
    rect(750, 600, 100, 210);
    }
    
    {
    //bottom right centre
        fill(0,0,255);
        strokeWeight(12);
    rect(300, 780, 450, 100);
    }
    
    {
    //Atop bottom right centre: Right
        fill(255,0,0);
        strokeWeight(12);
    rect(500, 600, 250, 180);
    }
    
    {
    //Atop bottom right centre: Left
        fill(0,0,0);
        strokeWeight(12);
    rect(300, 700, 200, 80);
    }
    
    {
    //border-locked bottom centre rectangle
        fill(220,220,220);
        strokeWeight(12);
    rect(300, 600, 200, 100);
    }
    
}