var topLocation = 0;
var leftLocation = 0;
var field;
var fieldCollision;
var level;
var player;
var key;
var star;
var bug;
var keyTopLocation;
var keyLeftLocation;
var starTopLocation;
var starLeftLocation;
var bugTopLocation;
var bugLeftLocation;
var heartTopLocation;
var heartLeftLocation;
var gameState = 0;
var path;
var hearts = 0;
var heartArray = [];

document.addEventListener("keyup", function(event){
	if(gameState == 0)
	{
		document.getElementById("startScreen").style.display = "none";
		level4();
		gameState++;
	}
	else if(gameState == 1)
	{
		if(event.key.toLowerCase() == "w")
		{
			if(topLocation != 0)
			{
				if(fieldCollision[topLocation-1][leftLocation] == 1 ||fieldCollision[topLocation-1][leftLocation] == 2)
				{
					topLocation -= 1;
					updatePlayer();
					checkTokenCollision();
				}
				else if(fieldCollision[topLocation-1][leftLocation] == 3)
				{
					topLocation -= 1;
					updatePlayer();
					death();
				}		
			}	
		}
		else if(event.key.toLowerCase() == "a")
		{
			if(leftLocation != 0)
			{
				if(fieldCollision[topLocation][leftLocation-1] == 1 ||fieldCollision[topLocation][leftLocation-1] == 2)
				{
					leftLocation -= 1;
					updatePlayer();
					checkTokenCollision();
				}
				else if(fieldCollision[topLocation][leftLocation-1] == 3)
				{
					leftLocation -= 1;
					updatePlayer();
					death();
				}			
			}	
		}
		else if(event.key.toLowerCase() == "s")
		{
			if(topLocation != 5)
			{
				if(fieldCollision[topLocation+1][leftLocation] == 1 ||fieldCollision[topLocation+1][leftLocation] == 2)
				{
					topLocation += 1;
					updatePlayer();
					checkTokenCollision();
				}
				else if(fieldCollision[topLocation+1][leftLocation] == 3)
				{
					topLocation += 1;
					updatePlayer();
					death();
				}		
			}	
		}
		else if(event.key.toLowerCase() == "d")
		{
			if(leftLocation != 4)
			{
				if(fieldCollision[topLocation][leftLocation+1] == 1 ||fieldCollision[topLocation][leftLocation+1] == 2)
				{
					leftLocation += 1;
					updatePlayer();
					checkTokenCollision();
				}
				else if(fieldCollision[topLocation][leftLocation+1] == 3)
				{
					leftLocation += 1;
					updatePlayer();
					death();				
				}
			}	
		}
	}
	else if(gameState == 2)
	{
		setTimeout(function(){
			location.reload();
		}, 750);
	}
});

var container = document.getElementById("fieldLayer");
var playerLayer = document.getElementById("playerLayer");
var tokens = document.getElementById("tokenLayer");
var heartsLayer = document.getElementById("heartsLayer");

var field1 = [
	[	//first row
		0, 1, 0, 0, 0
	],

	[	//second row
		0, 1, 1, 1, 0
	],

	[	//third row
		0, 0, 0, 1, 0
	],

	[	//fourth row
		1, 1, 1, 1, 0
	],

	[	//fifth row
		1, 0, 0, 1, 0
	],

	[	//sixth row
		0, 0, 0, 0, 0
	]
];

var field2 = [
	[	//first row
		0, 1, 0, 0, 0
	],

	[	//second row
		0, 1, 0, 1, 0
	],

	[	//third row
		1, 1, 1, 1, 1
	],

	[	//fourth row
		0, 0, 1, 0, 1
	],

	[	//fifth row
		0, 0, 0, 0, 1
	],

	[	//sixth row
		1, 1, 1, 1, 1
	]
];

var field3 = [
	[	//first row
		2, 3, 3, 3, 3
	],

	[	//second row
		2, 2, 2, 2, 3
	],

	[	//third row
		3, 2, 3, 3, 3
	],

	[	//fourth row
		2, 2, 2, 2, 2
	],

	[	//fifth row
		3, 3, 2, 3, 3
	],

	[	//sixth row
		3, 3, 3, 3, 3
	]
];

var field4 = [
	[	//first row
		0, 0, 1, 0, 0
	],

	[	//second row
		0, 0, 1, 1, 0
	],

	[	//third row
		0, 0, 1, 0, 0
	],

	[	//fourth row
		0, 1, 1, 0, 0
	],

	[	//fifth row
		0, 0, 1, 0, 0
	],

	[	//sixth row
		1, 1, 1, 1, 0
	]
];

var field5 = [
	[	//first row
		0, 0, 1, 0, 0
	],

	[	//second row
		0, 0, 1, 1, 0
	],

	[	//third row
		0, 0, 1, 0, 0
	],

	[	//fourth row
		0, 1, 1, 0, 0
	],

	[	//fifth row
		0, 0, 1, 0, 0
	],

	[	//sixth row
		1, 1, 1, 1, 0
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
	field = field1;
	drawField();
	fieldCollision = field;
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
	field = field2;
	drawField();
	fieldCollision = field;
	player = document.getElementById("player");
	key = document.getElementById("key");
	star = document.getElementById("star");
	bug = document.getElementById("bug");
}

function level3()
{
	level = 3;
	container.innerHTML = '';
	playerLayer.innerHTML = '';
	tokens.innerHTML = '';
	leftLocation = 0;
	topLocation = 0;
	drawPlayer(leftLocation, topLocation);
	drawToken(3, 1, "key");
	drawToken(2, 5, "star");
	drawPatrol(0, 3);
	startPatrol();
	field = field3;
	drawField();
	fieldCollision = field;
	player = document.getElementById("player");
	key = document.getElementById("key");
	star = document.getElementById("star");
	bug = document.getElementById("bug");
}

function level4()
{
	level = 4;
	container.innerHTML = '';
	playerLayer.innerHTML = '';
	tokens.innerHTML = '';
	leftLocation = 2;
	topLocation = 0;
	drawPlayer(leftLocation, topLocation);
	drawToken(3, 1, "key");
	drawToken(4, 5, "star");
	drawPatrol(0, 5);
	startPatrol();
	drawToken(1, 3, "heart");
	field = field4;
	drawField();
	fieldCollision = field;
	player = document.getElementById("player");
	key = document.getElementById("key");
	star = document.getElementById("star");
	bug = document.getElementById("bug");
}

function level5()
{
	level = 5;
	container.innerHTML = '';
	playerLayer.innerHTML = '';
	tokens.innerHTML = '';
	leftLocation = 2;
	topLocation = 0;
	drawPlayer(leftLocation, topLocation);
	drawToken(3, 1, "key");
	drawToken(4, 5, "star");
	drawPatrol(0, 5);
	startPatrol();
	drawToken(1, 3, "heart");
	field = field5;
	drawField();
	fieldCollision = field;
	player = document.getElementById("player");
	key = document.getElementById("key");
	star = document.getElementById("star");
	bug = document.getElementById("bug");
}

function drawField()
{
	container.innerHTML = "";
	for (var i = 0; i < field.length; i++) 
	{
		for (var j = 0; j < field[i].length; j++) 
		{
			//container.innerHTML += field[i][j];
			if(field[i][j] == 0)
			{
				container.innerHTML += block(i, "grass");
			}
			else if(field[i][j] == 1)
			{
				container.innerHTML += block(i, "stone");
			}
			else if(field[i][j] == 2)
			{
				container.innerHTML += block(i, "wood");
			}
			else if(field[i][j] == 3)
			{
				container.innerHTML += block(i, "water");
			}
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
		out += 'style="top:'+outY+'px; ';
		out += 'left: '+outX+'px">';
		tokens.innerHTML += out;
	}
	else if(token === "star")
	{
		out = '<img src="images/Star.png" alt="Star" class="token" id="star"';
		starTopLocation = y;
		starLeftLocation = x;
		out += 'style="top:'+outY+'px; ';
		out += 'left: '+outX+'px">';
		tokens.innerHTML += out;
	}
	else if(token == "heart")
	{
		out = '<img src="images/Heart.png" alt="Heart" class="token" id="heart'+hearts+'"';
		heartTopLocation = y;
		heartLeftLocation = x;
		out += 'style="top:'+outY+'px; ';
		out += 'left: '+outX+'px">';
		heartsLayer.innerHTML += out;
		heartArray[heartArray.length] = document.getElementById("heart"+hearts);
	}
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
	}, 500);
}

function checkTokenCollision()
{
	if(topLocation == keyTopLocation && leftLocation == keyLeftLocation)
	{
		fieldCollision[starTopLocation][starLeftLocation] = 1;
		if(level == 3)
		{
			fieldCollision[starTopLocation][starLeftLocation] = 2;
		}
		drawField();
		key.style.width = "50px";
		key.style.height = "80px";
		key.style.left = "0px";
		key.style.top = "-80px";
	}
	else if(topLocation == bugTopLocation && leftLocation == bugLeftLocation)
	{
		death();
	}
	else if(topLocation == heartTopLocation && leftLocation == heartLeftLocation)
	{
		heartTopLocation = -1;
		heartLeftLocation = -1;
		heartArray[heartArray.length-1].style.width = "50px";
		heartArray[heartArray.length-1].style.height = "80px";
		var temp = 450 - ((heartArray.length - 1) * 60);
		heartArray[heartArray.length-1].style.left = temp+"px";
		heartArray[heartArray.length-1].style.top = "-80px";
		heartArray[heartArray.length-1].style.paddingTop = "0px";
		hearts++;
	}
	else if(topLocation == starTopLocation && leftLocation == starLeftLocation)
	{
		topLocation = 0;
		leftLocation = 0;
		star.style.left = "60px";
		star.style.top = "-100px";	
		star.style.width = "400px";
		star.style.height = "600px";
		star.style.transform = "rotate(360deg)";
		setTimeout(function(){
			switch(level)
			{
				case 1:
					level2();
					break;
				case 2: 
					clearInterval(path);
					level3();
					break;
				case 3:
					clearInterval(path);
					level4();
					break;
				case 4: 
					clearInterval(path);
					level5();
			}		
		}, 2500);		
	}
}

function block(row, type)
{
	var grass = '<img src="images/Grass Block.png" alt="Grass Block" class="grass"';
	var dirt = '<img src="images/Dirt Block.png" alt="Dirt Block" class="dirt"';
	var stone = '<img src="images/Stone Block.png" alt="Stone Block" class="stone"';
	var water = '<img src="images/Water Block.png" alt="Water Block" class="water"';
	var wood = '<img src="images/Wood Block.png" alt="Wood Block" class="wood"';

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
	else if(type == "water")
	{
		out = water + 'style="top:'+((row*-90)-45)+'px">';
	}
	else if(type == "wood")
	{
		out = wood + 'style="top:'+((row*-90)-45)+'px">';
	}

	return out;
}

function death()
{
	if(hearts == 0)
	{
		gameState++;
		clearInterval(path);
		document.getElementById("gameOver").style.display = "block";
	}
	else
	{		
		document.getElementById(heartArray[hearts-1].id).style.display = "none";
		heartArray.pop();
		hearts--;
	}
}