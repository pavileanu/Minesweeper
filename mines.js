function mines(){
	
	var i,j;

	this.first=new Array(13);
	this.second=new Array(13);

	this.creare=function(){
		a = new Array(10);
		for(i=0;i<10;i++){
			a[i] = new Array(10);
			for(j=0;j<10;j++)
				a[i][j]=0;}

			for(i=0;i<11;i++){
				x=Math.floor(Math.random()*10);
				y=Math.floor(Math.random()*10);
				while(a[x][y]==1){
					x=Math.floor(Math.random()*10);
					y=Math.floor(Math.random()*10);}
					a[x][y]=1;

					this.first[i]=x;
					this.second[i]=y;}}

	mines.prototype.proba=function(){
		var imagine=document.getElementById("cheptea");
		var lucian=document.getElementById("pelin");
		for(i=0;i<11;i++)
		lucian.rows[allmines.first[i]].cells[allmines.second[i]].innerHTML='<img  src="bomba.jpg"  id="cheptea" style="position:relative;  width:50px; height:50px;">';}}


