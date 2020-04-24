var matrixTable, mineTable, allMines, flaggedMines, numberOfFlaggedMines;
var lines = 8, columns = 8, minesNumber=11;
var isGamePaused=0, timerId;
var CULOARE_BUTON = "#f2c55c";
var CULOARE_TD= "#cbd1cd"; 

function openSettings(){
	var mainMenu = document.getElementById('menu');
	menu.style.display = "none";
	var settingsMenu = document.getElementById('settings');
	settingsMenu.style.display = "block";
}

function settingsToMainMenu(){
	var mainMenu = document.getElementById('menu');
	menu.style.display = "flex";
	var settingsMenu = document.getElementById('settings');
	settingsMenu.style.display = "none";
}
