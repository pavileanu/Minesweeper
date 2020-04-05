function setBodyColor()
{
	var body=document.getElementsByTagName("body")[0];

	var a1=document.getElementById("colorBody1");
	var a2=document.getElementById("colorBody2");
	var a3=document.getElementById("colorBody3");
	if(a1.checked){	
		body.style.backgroundColor=a1.value;
		a2.checked=false;
		a3.checked=false;
	}

	else if(a2.checked){
		body.style.backgroundColor=a2.value;
		a1.checked=false;
		a3.checked=false;
	}
	else if(a3.checked){
		body.style.backgroundColor=a3.value;
		a1.checked=false;
		a2.checked=false;
	}
}

function setButtonColor(){
	var buttonColor=document.getElementById("buttonColor");
	CULOARE_BUTON = buttonColor.options[buttonColor.options.selectedIndex].value 
}

function setTableColor()
{
	var tableColors=document.getElementsByName("tableColor");

	for(i=0;i<tableColors.length;i++)
		if(tableColors[i].checked)
			CULOARE_TD= tableColors[i].value;
}

function setGameSettings(){
	lines =	document.getElementById("nrLines").value;
	columns = document.getElementById("nrColumns").value;
	minesNumber = document.getElementById("nrMines").value;

	if(!(lines == parseInt(lines, 10)))
		lines = 10;
	if(!(columns == parseInt(columns, 10)))
		columns = 10;
	if(!(minesNumber == parseInt(minesNumber, 10)))
		minesNumber = 10;
}


