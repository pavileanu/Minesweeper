function mines(){
	
	this.createMinesTable=function(){
		mineTable = new Array(10);
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


	mines.prototype.show=function(){
		var matrixTable=document.getElementById("matrixTable");
		for(i=0;i<10;i++)
		for(j=0;j<10;j++)
			if(mineTable[i][j]==1)
			matrixTable.rows[i].cells[j].innerHTML='<img  src="bomba.jpg"  id="bombImage" style="position:relative;  width:50px; height:50px;">';
	}
}


