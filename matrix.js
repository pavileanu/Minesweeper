function createUITable(){
    var body=document.getElementsByTagName("body")[0];
    var table=document.createElement("table");
    for(i=0;i<10;i++){
      var tr=document.createElement("tr");
      for(j=0;j<10;j++){
        var td=document.createElement("td");
        var casuta=document.createElement("button");
        casuta.style.background = CULOARE_BUTON;

        casuta.setAttribute("onclick","cellMatrixClicked(event, null, null)");    
        casuta.setAttribute("prim", i) 
        casuta.setAttribute("doi", j);

          td.appendChild(casuta);
          td.setAttribute("height"," 55px");
          td.setAttribute("width"," 50px");
          td.style.background = CULOARE_TD;
          tr.appendChild(td);}

          table.appendChild(tr);}

          body.appendChild(table);
          table.setAttribute("border",1);
          table.style.position="absolute";                
          table.style.left=200;       
          table.style.top=100;         

          table.setAttribute("id","matrixTable");
}


function cellMatrixClicked(ev, x, y){

  var currentCellValue;
  if(x == null )
    x=ev.target.getAttribute("prim");
  if(y == null)
    y=ev.target.getAttribute("doi");

  currentCellValue = matrixTable[x][y];

  matrixTableUI=document.getElementById("matrixTable");
  
  if(currentCellValue < 0){
    matrixTableUI.rows[x].cells[y].innerHTML='<img  src="bomba.jpg"  id="bombImage" style="position:relative;  width:50px; height:50px;">';
    alert("noob!");
    allmines.proba();
    clearInterval(oraid);
    setTimeout("removeGame();startGame()",5000);
    tim=1;
  }
  else if(currentCellValue >=1 && currentCellValue <= 6){
    matrixTableUI.rows[x].cells[y].innerHTML=" "+currentCellValue+" ";  
    matrixTable[x][y]=7;
  }
  else if(currentCellValue == 0){
    matrixTableUI.rows[x].cells[y].innerHTML=" "+currentCellValue+" ";  
    matrixTable[x][y]=7;

    if(x > 0 && y > 0)
      cellMatrixClicked(ev, Number(x-1), Number(y-1));
    if(x < 9 && y < 9)
      cellMatrixClicked(ev, Number(x)+1, Number(y)+1);
    if(x > 0 && y < 9)
      cellMatrixClicked(ev, Number(x-1), Number(y+1));
    if(x < 9 && y > 0)
      cellMatrixClicked(ev, Number(x)+1, Number(y-1));
    if(x > 0)
      cellMatrixClicked(ev, Number(x-1), Number(y));
    if(y > 0)
      cellMatrixClicked(ev, Number(x), Number(y-1));
    if(x < 9)
      cellMatrixClicked(ev, Number(x)+1, Number(y));
    if(y < 9)
      cellMatrixClicked(ev, Number(x), Number(y)+1);
  }

  winTest();
}

function winTest()
{ 
  var winTestFlag=1;
  var gameTimeBox=document.getElementById("gameTimer");
  for(i=0;i<10;i++)
    for(j=0;j<10;j++)
      if(matrixTable[i][j] != -1 && matrixTable[i][j] != 7)
        winTestFlag=0;

  if(winTestFlag){
    alert("Ati trecut jocu in " + gameTimeBox.value);
    allmines.proba();
    clearInterval(oraid);

    tim=1;
  }
}

function createDataTable(mineTable)
{
  matrixTable = new Array(10);
  for(x=0;x<10;x++){
    matrixTable[x] = new Array(10);
    for(y=0;y<10;y++)
      if(mineTable[x][y]==0){
        if(x==0&&y==0)
          matrixTable[x][y]=mineTable[0][1]+mineTable[1][1]+mineTable[1][0];  
        if(x==0&&y==9)
          matrixTable[x][y]=mineTable[0][8]+mineTable[1][8]+mineTable[1][9];
        if(x==9&&y==0)
          matrixTable[x][y]=mineTable[8][0]+mineTable[9][1]+mineTable[8][1];
        if(x==9&&y==9)
          matrixTable[x][y]=mineTable[8][8]+mineTable[8][9]+mineTable[9][8];
          //colturi final
  
        if(y==0&&x!=0&&x!=9)
          matrixTable[x][y]=mineTable[x+1][y]+mineTable[x-1][y]+mineTable[x-1][y+1]+mineTable[x][y+1]+mineTable[x+1][y+1];
        if(x==0&&y!=0&&y!=9)
          matrixTable[x][y]=mineTable[x][y-1]+mineTable[x][y+1]+mineTable[x+1][y-1]+mineTable[x+1][y+1]+mineTable[x+1][y];
        if(x==9&&y!=0&&y!=9)
          matrixTable[x][y]=mineTable[x][y-1]+mineTable[x][y+1]+mineTable[x-1][y-1]+mineTable[x-1][y]+mineTable[x-1][y+1];
        if(y==9&&x!=0&&x!=9)
          matrixTable[x][y]=mineTable[x-1][y]+mineTable[x+1][y]+mineTable[x-1][y-1]+mineTable[x][y-1]+mineTable[x+1][y-1];
          //margini final
        if(x!=0&&y!=0&&x!=9&&y!=9)
          matrixTable[x][y]=mineTable[x-1][y-1]+mineTable[x-1][y]+mineTable[x-1][y+1]+mineTable[x][y-1]+mineTable[x][y+1]+mineTable[x+1][y-1]+mineTable[x+1][y]+mineTable[x+1][y+1];
      }
      else matrixTable[x][y]=-1;
    }


}









