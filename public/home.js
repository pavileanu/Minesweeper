var matrixTable, mineTable, allMines, flaggedMines, numberOfFlaggedMines;
var lines = sessionStorage.getItem("lines") || 8, 
	columns = sessionStorage.getItem("columns") || 8, 
	minesNumber = sessionStorage.getItem("nrMines") || 11;
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
