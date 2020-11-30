var container = document.getElementById("gameContainer");
var tokens = document.getElementById("tokenLayer");

var field1 = [
	[	//first row
		block(0, "grass"), 
		block(0, "stone"), 
		block(0, "grass"), 
		block(0, "grass"), 
		block(0, "grass")
	],

	[	//second row
		block(1, "grass"), 
		block(1, "stone"),
		block(1, "stone"), 
		block(1, "stone"), 
		block(1, "grass")
	],

	[	//third row
		block(2, "grass"), 
		block(2, "grass"), 
		block(2, "grass"), 
		block(2, "stone"), 
		block(2, "grass")
	],

	[	//fourth row
		block(3, "stone"), 
		block(3, "stone"), 
		block(3, "stone"), 
		block(3, "stone"), 
		block(3, "grass")
	],

	[	//fifth row
		block(4, "stone"), 
		block(4, "grass"), 
		block(4, "grass"), 
		block(4, "grass"), 
		block(4, "grass")
	],

	[	//sixth row
		block(5, "stone"), 
		block(5, "grass"), 
		block(5, "grass"), 
		block(5, "grass"), 
		block(5, "grass")
	]

]

function level1()
{	
	drawPlayer(1, 0)
	drawField(field1);
}

function drawField(field)
{
	for (var i = 0; i < field.length; i++) 
	{
		for (var j = 0; j < field[i].length; j++) 
		{
			container.innerHTML += field[i][j];
		}	
	}
}

function drawPlayer(x, y)
{
	var out = '<img src="images/Boy.png" alt="Player character" id="player"';
	var outY = -65 + (y * 90);
	out += 'style="top:'+outY+'px; ';
	var outX = x * 101;
	out += 'left: '+outX+'px">';

	tokens.innerHTML += out;

	//tokens.innerHTML +=  style="top:-55px; left: 101px">';

}

function block(row, type)
{
	var grass = '<img src="images/Grass Block.png" alt="Grass Block" class="grass"';
	var dirt = '<img src="images/Dirt Block.png" alt="Dirt Block" class="dirt"';
	var stone = '<img src="images/Stone Block.png" alt="stone Block" class="stone"';

	var out;
	
	if(type == "grass")
	{
		out = grass + 'style="top:'+((row*-90)-55)+'px">';
	}
	else if(type == "dirt")
	{
		out = dirt + 'style="top:'+((row*-90)-55)+'px">';
	}
	else if(type == "stone")
	{
		out = stone + 'style="top:'+((row*-90)-55)+'px">';
	}

	return out;
}

level1();