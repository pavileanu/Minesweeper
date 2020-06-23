function setGameSettings(){

	var themeSelect = document.getElementById("themeSelect");
	//var valueTheme = themeSelect.options[themeSelect.options.selectedIndex].value; 

	sessionStorage.setItem("lines", document.getElementById("nrLines").value);
	sessionStorage.setItem("columns", document.getElementById("nrColumns").value);
	sessionStorage.setItem("nrMines", document.getElementById("nrMines").value);

	lines = sessionStorage.getItem("lines"); 
	columns = sessionStorage.getItem("columns");
	minesNumber = sessionStorage.getItem("minesNumber");

	if(!(lines == parseInt(lines, 10)))
		lines = 8;
	if(!(columns == parseInt(columns, 10)))
		columns = 8;
	if(!(minesNumber == parseInt(minesNumber, 10)))
		minesNumber = 11;
	
	
}


