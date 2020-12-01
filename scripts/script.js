var topLocation = 0;
var leftLocation = 0;
var fieldCollision;
var level;
var player;
var key;
var star;
var bug;
var keyCheck;
var keyTopLocation;
var keyLeftLocation;
var starTopLocation;
var starLeftLocation;
var bugTopLocation;
var bugLeftLocation;
var start = false;
var path;

document.addEventListener("keyup", function(event){
	if(!start)
	{
		document.getElementById("startScreen").style.display = "none";
		level1();
		start = true;
	}
	else if(event.key.toLowerCase() == "w")
	{
		if(topLocation != 0)
		{
			if(fieldCollision[topLocation-1][leftLocation])
			{
				topLocation -= 1;
				updatePlayer();
				checkTokenCollision();
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
				checkTokenCollision();
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
				checkTokenCollision();
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
				checkTokenCollision();
			}
		}	
	}
});

var container = document.getElementById("fieldLayer");
var playerLayer = document.getElementById("playerLayer");
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
		block(4, "stone"), 
		block(4, "grass")
	],

	[	//sixth row
		block(5, "stone"), 
		block(5, "grass"), 
		block(5, "grass"), 
		block(5, "grass"), 
		block(5, "grass")
	]
];

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
		true, 
		false
	],

	[	//sixth row
		false, 
		false, 
		false, 
		false, 
		false
	]
];

var field2 = [
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
		block(1, "grass"), 
		block(1, "stone"), 
		block(1, "grass")
	],

	[	//third row
		block(2, "stone"), 
		block(2, "stone"), 
		block(2, "stone"), 
		block(2, "stone"), 
		block(2, "stone")
	],

	[	//fourth row
		block(3, "grass"), 
		block(3, "grass"), 
		block(3, "stone"), 
		block(3, "grass"), 
		block(3, "stone")
	],

	[	//fifth row
		block(4, "stone"), 
		block(4, "grass"), 
		block(4, "grass"), 
		block(4, "grass"), 
		block(4, "stone")
	],

	[	//sixth row
		block(5, "stone"), 
		block(5, "stone"), 
		block(5, "stone"), 
		block(5, "stone"), 
		block(5, "stone")
	]
];

var field2Collision = [
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
		false, 
		true, 
		false
	],

	[	//third row
		true, 
		true, 
		true, 
		true, 
		true
	],

	[	//fourth row
		false, 
		false, 
		true, 
		false, 
		true
	],

	[	//fifth row
		false, 
		false, 
		false, 
		false, 
		true
	],

	[	//sixth row
		true, 
		true, 
		true, 
		true, 
		true
	]
];

function level1()
{	
	level = 1;
	leftLocation = 1;
	topLocation = 0;
	drawPlayer(leftLocation, topLocation);
	drawToken(3, 4, "key");
	drawToken(0, 5, "star");
	drawField(field1);
	fieldCollision = field1Collision;
	player = document.getElementById("player");
	key = document.getElementById("key");
	star = document.getElementById("star");	
}

function level2()
{
	level = 2;
	container.innerHTML = '';
	playerLayer.innerHTML = '';
	tokens.innerHTML = '';
	leftLocation = 1;
	topLocation = 0;
	drawPlayer(leftLocation, topLocation);
	drawToken(3, 1, "key");
	drawToken(0, 4, "star");
	drawPatrol(0, 2);
	startPatrol();
	drawField(field2);
	fieldCollision = field2Collision;
	player = document.getElementById("player");
	key = document.getElementById("key");
	star = document.getElementById("star");
	bug = document.getElementById("bug");
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

	playerLayer.innerHTML = out;
}

function updatePlayer()
{
	var outY = -65 + (topLocation * 86);
	var outX = leftLocation * 101;

	player.style.top = outY + "px";
	player.style.left = outX + "px";
}

function drawToken(x, y, token)
{
	var outY = -65 + (y * 86);
	var outX = x * 101;
	var out;

	if(token === "key")
	{
		out = '<img src="images/Key.png" alt="Key" class="token" id="key"';
		keyTopLocation = y;
		keyLeftLocation = x;
	}
	else if(token === "star")
	{
		out = '<img src="images/Star.png" alt="Star" class="token" id="star"';
		starTopLocation = y;
		starLeftLocation = x;
	}

	out += 'style="top:'+outY+'px; ';
	out += 'left: '+outX+'px">';
	tokens.innerHTML += out;
}

function drawPatrol(x, y)
{
	bugTopLocation = y;
	bugLeftLocation = x;
	var outY = -65 + (y * 86);
	var outX = x * 101;
	var out = '<img src="images/Enemy Bug.png" alt="Enemy Bug" class="token" id="bug"';
	out += 'style="top:'+outY+'px; ';
	out += 'left: '+outX+'px">';
	tokens.innerHTML += out;
}

function startPatrol()
{
	var move = "right"
	path = setInterval(function(){

		if(move === "right" && bugLeftLocation != 4)
		{
			bugLeftLocation++;
		}
		else if(move === "right" && bugLeftLocation == 4)
		{
			bug.style.transform = "scaleX(-1)";
			move = "left";
		}
		else if(move === "left" && bugLeftLocation != 0)
		{
			bugLeftLocation--;
		}
		else if(move === "left" && bugLeftLocation == 0)
		{
			bug.style.transform = "scaleX(1)";
			move = "right";
		}

		var outX = bugLeftLocation * 101;
		bug.style.left = outX+"px";
		checkTokenCollision();
	}, 500)
}

function checkTokenCollision()
{
	if(topLocation == keyTopLocation && leftLocation == keyLeftLocation)
	{
		keyCheck = true;
		fieldCollision[starTopLocation][starLeftLocation] = true;
		key.style.width = "50px";
		key.style.height = "80px";
		key.style.left = "0px";
		key.style.top = "-80px";
	}
	else if(topLocation == bugTopLocation && leftLocation == bugLeftLocation)
	{
		death();
	}
	else if(topLocation == starTopLocation && leftLocation == starLeftLocation)
	{
		star.style.left = "60px";
		star.style.top = "-100px";	
		star.style.width = "400px";
		star.style.height = "600px";
		star.style.transform = "rotate(360deg)";
		setTimeout(function(){
			if(level == 1)
			{
				level2();
			}
			else if(level == 2)
			{
				clearInterval(path);
				level2();
			}
		}, 2500);		
	}
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

function death()
{

}