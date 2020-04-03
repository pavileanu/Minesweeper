function mine(x, y){
	this.x = x;
	this.y = y;
}
function createMinesTable(){
	allMines = new Array(10);

	mineTable = new Array(10);
	var mineIndex = 0; 

	for(i=0;i<10;i++){
		mineTable[i] = new Array(10);
	for(j=0;j<10;j++)
		mineTable[i][j]=0;}

		for(i=0;i<11;i++){
			x=Math.floor(Math.random()*10);
			y=Math.floor(Math.random()*10);
			mineTable[x][y] = 1;
			allMines[mineIndex++] = new mine(x,y);
		}
	return mineTable;
}

function showMineTable(){
	var matrixTable=document.getElementById("matrixTable");
	for(i=0;i<10;i++)
	for(j=0;j<10;j++)
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



