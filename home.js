var matrixTable, mineTable, allmines;
var isGamePaused=0, timerId;
var CULOARE_BUTON = "FF9999";
var CULOARE_TD= "#FFCC00"; 

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
