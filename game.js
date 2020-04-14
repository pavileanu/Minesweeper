function startGame(){
	removeMainMenu();

	var body=document.getElementsByTagName("body")[0];
	var gameBar = document.createElement("section");
	gameBar.setAttribute("id", "gameBar");
	body.appendChild(gameBar);


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
	var gameBar = document.getElementById("gameBar");

	body.removeChild(matrixTable);
	body.removeChild(gameBar);

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
	var gameBar = document.getElementById("gameBar");
	var x=document.createElement("input");
	x.setAttribute("type","button");
	x.setAttribute("onclick","removeGame();startGame()");
	x.setAttribute("value","New");
	x.setAttribute("id","newGame");
	gameBar.appendChild(x);
}

function createGameTimerTextBox(){
	var gameBar = document.getElementById("gameBar");
	var x=document.createElement("input");
	x.setAttribute("type","text");
	x.setAttribute("id","gameTimer");
	gameBar.appendChild(x);
}

function createPauseGameButton(){
	var gameBar = document.getElementById("gameBar");
    var stopClock=document.createElement("input");
	stopClock.setAttribute("type","button");
	stopClock.setAttribute("id","pauseGame");
	stopClock.setAttribute("value","Pause");
	stopClock.setAttribute("onclick","pauseGame()");
	gameBar.appendChild(stopClock);
}

function createMainMenuButton(){
	var gameBar = document.getElementById("gameBar");
	var x=document.createElement("input");
	x.setAttribute("type","button");
	x.setAttribute("onclick","window.location.reload()");
	x.setAttribute("value","Exit");
	x.setAttribute("id","mainMenu");
	gameBar.appendChild(x);
}

