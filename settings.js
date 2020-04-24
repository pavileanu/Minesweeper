function setGameSettings(){

	var themeSelect = document.getElementById("themeSelect");
	var valueTheme = themeSelect.options[themeSelect.options.selectedIndex].value; 

	lines =	document.getElementById("nrLines").value;
	columns = document.getElementById("nrColumns").value;
	minesNumber = document.getElementById("nrMines").value;

	if(!(lines == parseInt(lines, 10)))
		lines = 8;
	if(!(columns == parseInt(columns, 10)))
		columns = 8;
	if(!(minesNumber == parseInt(minesNumber, 10)))
		minesNumber = 8;
}


