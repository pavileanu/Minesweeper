var matrixTable, mineTable, allMines, flaggedMines, numberOfFlaggedMines;
var isGamePaused=0, timerId;
var CULOARE_BUTON = "#FF9999";
var CULOARE_TD= "#FFCC00"; 
window.PointerEvent=null;

function createWelcomeMessageLayer(){ 
	var welcomeMessageBox=document.getElementById("welcomeMessageBox");
	var welcomeMessageText=new String("Bine v-am gasit la joc!");
	welcomeMessageText=welcomeMessageText.fontcolor("green");
	welcomeMessageText=welcomeMessageText.blink();
	welcomeMessageBox.innerHTML=welcomeMessageText;
}

function createMouseCursor(event){	
	var mouseCursor=document.getElementById("mouseCursor");
	var xx=eve.clientX;
	var yy=eve.clientY;
	mouseCursor.style.top=yy+5;
	mouseCursor.style.left=xx+5;
}


function openSettings(){
	var mainMenu = document.getElementById('menu');
	menu.style.display = "none";
	var settingsMenu = document.getElementById('settings');
	settingsMenu.style.display = "block";
}

function settingsToMainMenu(){
	var mainMenu = document.getElementById('menu');
	menu.style.display = "block";
	var settingsMenu = document.getElementById('settings');
	settingsMenu.style.display = "none";
}


//show, loose, doNothing


 
function FlaggedMinesArroundCell(i, j){
 
 	var flaggedMinesSelected = [];
	for(k = 0; k < flaggedMines; k++){
		if((flaggedMines[k].x == i-1 && flaggedMines[k].y == j-1) ||
			(flaggedMines[k].x == i-1 && flaggedMines[k].y == j)  ||
			(flaggedMines[k].x == i-1 && flaggedMines[k].y == j+1) ||
			(flaggedMines[k].x == i && flaggedMines[k].y == j-1) ||
			(flaggedMines[k].x == i && flaggedMines[k].y == j+1) ||
			(flaggedMines[k].x == i+1 && flaggedMines[k].y == j-1) ||
			(flaggedMines[k].x == i+1 && flaggedMines[k].y == j) ||
			(flaggedMines[k].x == i+1 && flaggedMines[k].y == j+1))
			flaggedMinesSelected.push(new mine(flaggedMines[k].x, flaggedMines[k].y));
	return flaggedMinesSelected;
	}
}

/*
function eventPressed()
{
	var fM = FlaggedMinesArroundCell(i, j);
	if(fm.le)

	}
}




 return flaggedMines [i-1][j-1]    [i-1][j]          [i-1][j+1]
[i][j-1]       					 [i][j+1]
[i+1][j-1]     [i+1][j]          [i+1][j+1]
}

*/