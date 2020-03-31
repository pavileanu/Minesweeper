function mines(){
	
	this.createMinesTable=function(){
		var mineTable = new Array(10);
		for(i=0;i<10;i++){
			mineTable[i] = new Array(10);
			for(j=0;j<10;j++)
				mineTable[i][j]=0;}

			for(i=0;i<11;i++){
				x=Math.floor(Math.random()*10);
				y=Math.floor(Math.random()*10);
				mineTable[x][y] = 1;
			}
		return mineTable;
	}


	mines.prototype.proba=function(){
		var matrixTable=document.getElementById("matrixTable");
		//for(i=0;i<11;i++)
		//matrixTable.rows[allmines.first[i]].cells[allmines.second[i]].innerHTML='<img  src="bomba.jpg"  id="bombImage" style="position:relative;  width:50px; height:50px;">';
	}
}


