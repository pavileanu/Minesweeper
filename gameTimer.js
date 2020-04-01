var timeSpentInGame;

function setTimer()
{
	var gameTimer=document.getElementById("gameTimer");
	timeSpentInGame = new Date(new Date().getTime() - startingDate.getTime())
	gameTimer.value = timeSpentInGame.getHours()-2 + ":" + timeSpentInGame.getMinutes() + ":" + timeSpentInGame.getSeconds()
}

function pauseGame()
{
	pauseGameButton=document.getElementById("pauseGame");
	var matrixTable = document.getElementById("matrixTable");
	if(isGamePaused==0)
		{clearInterval(timerId);
		isGamePaused=1;
		pauseGameButton.value="Resume Game";
		matrixTable.querySelectorAll('button').forEach(function(button){button.setAttribute("disabled", "true");});
	}
	else
	{
		startingDate=new Date(new Date().getTime() - timeSpentInGame.getTime())
		timerId=setInterval("setTimer()",1000);
		isGamePaused=0;
		pauseGameButton.value="Pause Game";
		matrixTable.querySelectorAll('button').forEach(function(button){button.removeAttribute("disabled");});
	} 
}









