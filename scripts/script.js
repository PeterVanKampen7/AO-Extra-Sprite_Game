var topLocation = 0;
var leftLocation = 0;
var fieldCollision;

document.addEventListener("keydown", function(event){
	if(event.key.toLowerCase() == "w")
	{
		if(topLocation != 0)
		{
			if(fieldCollision[topLocation-1][leftLocation])
			{
				topLocation -= 1;
				updatePlayer();
			}		
		}	
	}
	else if(event.key.toLowerCase() == "a")
	{
		if(leftLocation != 0)
		{
			if(fieldCollision[topLocation][leftLocation-1])
			{
				leftLocation -= 1;
				updatePlayer();
			}			
		}	
	}
	else if(event.key.toLowerCase() == "s")
	{
		if(topLocation != 5)
		{
			if(fieldCollision[topLocation+1][leftLocation])
			{
				topLocation += 1;
				updatePlayer();
			}		
		}	
	}
	else if(event.key.toLowerCase() == "d")
	{
		if(leftLocation != 4)
		{
			if(fieldCollision[topLocation][leftLocation+1])
			{
				leftLocation += 1;
				updatePlayer();
			}
		}	
	}
});



var container = document.getElementById("gameContainer");
var tokens = document.getElementById("playerLayer");

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

var field1Collision = [
	[	//first row
		false, 
		true, 
		false, 
		false, 
		false
	],

	[	//second row
		false, 
		true,
		true, 
		true, 
		false
	],

	[	//third row
		false, 
		false, 
		false, 
		true, 
		false
	],

	[	//fourth row
		true, 
		true, 
		true, 
		true, 
		false
	],

	[	//fifth row
		true, 
		false, 
		false, 
		false, 
		false
	],

	[	//sixth row
		true, 
		false, 
		false, 
		false, 
		false
	]
]

function level1()
{	
	leftLocation = 1;
	topLocation = 0;
	drawPlayer(leftLocation, topLocation);
	drawField(field1);
	fieldCollision = field1Collision
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

	tokens.innerHTML = out;
}

function updatePlayer()
{
	var outY = -65 + (topLocation * 86);
	var outX = leftLocation * 101;

	player.style.top = outY + "px";
	player.style.left = outX + "px";
}

function block(row, type)
{
	var grass = '<img src="images/Grass Block.png" alt="Grass Block" class="grass"';
	var dirt = '<img src="images/Dirt Block.png" alt="Dirt Block" class="dirt"';
	var stone = '<img src="images/Stone Block.png" alt="Stone Block" class="stone"';

	var out;
	
	if(type == "grass")
	{
		out = grass + 'style="top:'+((row*-90)-45)+'px">';
	}
	else if(type == "dirt")
	{
		out = dirt + 'style="top:'+((row*-90)-45)+'px">';
	}
	else if(type == "stone")
	{
		out = stone + 'style="top:'+((row*-90)-45)+'px">';
	}

	return out;
}

level1();
var player = document.getElementById("player");