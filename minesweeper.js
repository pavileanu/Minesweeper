function startGame(){
	removeMainMenu();

	createNewGameButton();
	createGameTimer();
	createPauseGameButton();
	createMainMenuButton();

	fillTableData();

	createTable();}

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

	if(q==2)
		oraid=setInterval('timp()',1000);

	min=0;
	sec=0;
	q=0;
	reapel=1;
	ora=new Date();
	allmines.creare();
}

function removeMainMenu(){
	
	var body=document.getElementsByTagName("body")[0];

	var menu=document.getElementById("menu");
	if(menu != null)
		body.removeChild(menu);
	var welcomeMessageBox=document.getElementById("welcomeMessageBox");
	if(welcomeMessageBox != null)
		body.removeChild(welcomeMessageBox);
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

function createGameTimer(){
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
	stopClock.setAttribute("onclick","stopare()");
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

