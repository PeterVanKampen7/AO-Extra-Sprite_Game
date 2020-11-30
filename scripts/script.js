var player = document.getElementById("player");
var top = player.style.top.length;
var left;

document.addEventListener("keydown", function(event){
	if(event.key.toLowerCase() == "w")
	{
		alert(player.style.top);
	}
	else if(event.key.toLowerCase() == "a")
	{
		alert(top);
	}
	else if(event.key.toLowerCase() == "s")
	{
		player.style.top = "200px";
	}
	else if(event.key.toLowerCase() == "d")
	{
		
	}
});