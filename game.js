function startGame(){
	removeMainMenu();

	createNewGameButton();
	createGameTimerTextBox();
	createPauseGameButton();
	createMainMenuButton();	

	createDataTable(createMinesTable());
	createUITable();

	startingDate=new Date();       
	timerId=setInterval('setTimer()',1000);
	isGamePaused=0;
}

function removeGame(){

	var body=document.getElementsByTagName("body")[0];
	var matrixTable=document.getElementById("matrixTable");

	var newGame=document.getElementById("newGame");
	var gameTimer=document.getElementById("gameTimer");
	var mainMenu=document.getElementById("mainMenu");
	var pauseGame=document.getElementById("pauseGame");
	body.removeChild(matrixTable);
	body.removeChild(newGame);
	body.removeChild(gameTimer);
	body.removeChild(mainMenu); 
	body.removeChild(pauseGame);

}

function removeMainMenu(){
	
	var body=document.getElementsByTagName("body")[0];

	var menu=document.getElementById("menu");
	if(menu != null)
		body.removeChild(menu);
}

function winTest()
{ 
  var winTestFlag=1;
  var gameTimeBox=document.getElementById("gameTimer");
  for(i=0;i<lines;i++)
    for(j=0;j<columns;j++)
      if(matrixTable[i][j] != -1 && matrixTable[i][j] != 7)
        winTestFlag=0;

  if(winTestFlag){    
    showMineTable();
    alert("Ati trecut jocu in " + gameTimeBox.value);
    clearInterval(timerId);
  }
}

function loose(){
  alert("noob!");
  showMineTable();
  clearInterval(timerId);
  var gameMatrix = document.getElementById("matrixTable");
  gameMatrix.querySelectorAll('button').forEach(function(button){button.setAttribute("disabled", "true");});
}

function createNewGameButton(){
	var body=document.getElementsByTagName("body")[0];
	var x=document.createElement("input");
	x.setAttribute("type","button");
	x.setAttribute("onclick","removeGame();startGame()");
	x.setAttribute("value","New game");
	x.setAttribute("id","newGame");
	body.appendChild(x);
}

function createGameTimerTextBox(){
	var body=document.getElementsByTagName("body")[0];
	var x=document.createElement("input");
	x.setAttribute("type","text");
	x.setAttribute("id","gameTimer");
	x.setAttribute("align","center");
	body.appendChild(x);
}

function createPauseGameButton(){
	var body=document.getElementsByTagName("body")[0];
    var stopClock=document.createElement("input");
	stopClock.setAttribute("type","button");
	stopClock.setAttribute("id","pauseGame");
	stopClock.setAttribute("value","Pause Game");
	stopClock.setAttribute("onclick","pauseGame()");
	body.appendChild(stopClock);
}

function createMainMenuButton(){
	var body=document.getElementsByTagName("body")[0];
	var x=document.createElement("input");
	x.setAttribute("type","button");
	x.setAttribute("onclick","window.location.reload()");
	x.setAttribute("value","Main Menu");
	x.setAttribute("id","mainMenu");
	body.appendChild(x);
}

