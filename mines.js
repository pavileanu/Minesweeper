function mine(x, y){
	this.x = x;
	this.y = y;
}
function createMinesTable(){
	allMines = new Array(minesNumber);

	mineTable = new Array(lines);
	var mineIndex = 0; 

	for(i=0;i<lines;i++){
		mineTable[i] = new Array(columns);
	for(j=0;j<columns;j++)
		mineTable[i][j]=0;}

		for(i=0;i<minesNumber;i++){
			x=Math.floor(Math.random() * lines); 
			y=Math.floor(Math.random() * columns);
			mineTable[x][y] = 1;
			allMines[mineIndex++] = new mine(x,y);
		}
	return mineTable;
}

function showMineTable(){
	var matrixTable=document.getElementById("matrixTable");
	for(i=0;i<lines;i++)
	for(j=0;j<columns;j++)
		if(mineTable[i][j]==1)
			matrixTable.rows[i].cells[j].innerHTML='<img  src="bomba.jpg"  id="bombImage" style="position:relative;  width:50px; height:50px;">';
}

function setMine(x, y){
	flaggedMines[numberOfFlaggedMines++] = new mine(x, y);
}

function removeMine(x, y){
	for(var i=0; i<flaggedMines.length; i++)
		if(flaggedMines[i].x == x && flaggedMines[i].y == y){
			flaggedMines.splice(i, 1);
			numberOfFlaggedMines--;
			break;
		}
}

function isFlaggedMine(x, y){
	if(flaggedMines.length)
		for(var i=0; i<flaggedMines.length; i++)
			if(flaggedMines[i].x == x && flaggedMines[i].y == y){
				return 1;
		}
	return 0;
}

function FlaggedMinesArroundCell(i, j){
 
  i = Number(i);
  j = Number(j); 
  var flaggedMinesSelected = [];
  for(k = 0; k < flaggedMines.length; k++)
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



