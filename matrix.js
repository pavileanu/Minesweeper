function createUITable(){
    var body=document.getElementsByTagName("body")[0];
    var table=document.createElement("table");
    numberOfFlaggedMines = 0;
    flaggedMines = [];
    for(i=0;i<lines;i++){
      var tr=document.createElement("tr");
      for(j=0;j<columns;j++){
        var td=document.createElement("td");
        var casuta=document.createElement("button");

        casuta.setAttribute("onclick","cellMatrixClicked(event, null, null)");    
        casuta.setAttribute("prim", i);
        casuta.setAttribute("doi", j);
        td.setAttribute("prim", i);
        td.setAttribute("doi", j);

        td.setAttribute("onclick", "indicatorPressed(event)");

        addRightClickEvenCell(casuta);

        td.appendChild(casuta);
        tr.appendChild(td);}

        table.appendChild(tr);}

        body.appendChild(table);
        table.setAttribute("border",1);      

        table.setAttribute("id","matrixTable");
}

function createDataTable(mineTable)
{
  matrixTable = new Array(lines);
  for(x=0;x<lines;x++){
    matrixTable[x] = new Array(columns);
    for(y=0;y<columns;y++)
      matrixTable[x][y] = calculateCellValue(x, y);
    }
}

function cellMatrixClicked(ev, x, y){

  if( x == null && y == null)
    ev.stopPropagation();

  var currentCellValue;
  if(x == null )
    x=ev.target.getAttribute("prim");
  if(y == null)
    y=ev.target.getAttribute("doi");

  currentCellValue = matrixTable[x][y];

  matrixTableUI=document.getElementById("matrixTable");
  
  if(currentCellValue < 0){
    loose(x, y);
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

    if(x > 0)
      cellMatrixClicked(ev, Number(x-1), Number(y));

    if(x > 0 && y < columns - 1)
      cellMatrixClicked(ev, Number(x-1), Number(y)+1);

    if(y > 0)
      cellMatrixClicked(ev, Number(x), Number(y-1));

    if(y < columns - 1)
      cellMatrixClicked(ev, Number(x), Number(y)+1);
    
    if(x < lines - 1 && y > 0)
      cellMatrixClicked(ev, Number(x)+1, Number(y-1));

    if(x < lines - 1)
      cellMatrixClicked(ev, Number(x)+1, Number(y));

    if(x < lines - 1 && y < columns - 1)
      cellMatrixClicked(ev, Number(x)+1, Number(y)+1);
  }

  winTest();
}

function addRightClickEvenCell(casuta)
{
  casuta.addEventListener("contextmenu",function(event){
  event.preventDefault();
  var i = this.getAttribute("prim");
  var j = this.getAttribute("doi");
  if(isFlaggedMine(i, j) == 0){
    this.style.backgroundImage = "url('flagMine.png')";
    this.style.backgroundSize = "100% 100%";
    this.setAttribute("onclick", "");
    setMine(i, j);
  }
  else{
    this.style.backgroundImage = "";
    this.setAttribute("onclick","cellMatrixClicked(event, null, null)"); 
    removeMine(i, j);
  }
  },false);
}


function indicatorPressed(ev)
{
  var x=ev.target.getAttribute("prim");
  var y=ev.target.getAttribute("doi");

  if(isFlaggedMine(x, y))
    return;

  var fm = FlaggedMinesArroundCell(x, y);
  if (fm == null) fm = [];
  var checkCount = 0;
  if(fm.length > 0)
  {

    for(var k = 0; k < fm.length; k++)
      if(matrixTable[fm[k].x][fm[k].y] == -1)
        checkCount++;

    if(fm.length == calculateCellValue(x, y)){
      if( checkCount == fm.length)      
        showCells(x, y);
      else
        loose(); 
      return;
    }

  }
  hooverCells(x, y);
}

function showCells(i, j){

  i = Number(i);
  j = Number(j);
    
  if(i > 0 && j > 0)
    if(matrixTable[i-1][j-1] != -1 &&  matrixTable[i-1][j-1] != 7)
      cellMatrixClicked(null, i-1, j-1);

  if(i > 0)
    if(matrixTable[i-1][j] != -1 &&  matrixTable[i-1][j] != 7)
      cellMatrixClicked(null, i-1, j);
    
  if(i > 0 && j < columns -1)
    if(matrixTable[i-1][j+1] != -1 && matrixTable[i-1][j+1] != 7)
      cellMatrixClicked(null, i-1, j+1);

  if(j > 0)
    if(matrixTable[i][j-1] != -1 && matrixTable[i][j-1] != 7)
      cellMatrixClicked(null, i, j-1);
  
  if(j < columns -1)
    if(matrixTable[i][j+1] != -1 && matrixTable[i][j+1] != 7)
      cellMatrixClicked(null, i, j+1);

  if(i < lines - 1 && j > 0)
    if(matrixTable[i+1][j-1] != -1 &&  matrixTable[i+1][j-1] != 7)
      cellMatrixClicked(null, i+1, j-1);

  if(i < lines - 1)
    if(matrixTable[i+1][j] != -1 &&  matrixTable[i+1][j] != 7)
      cellMatrixClicked(null, i+1, j);

  if(i < lines - 1 && j < columns - 1)
    if(matrixTable[i+1][j+1] != -1 && matrixTable[i+1][j+1] != 7)
      cellMatrixClicked(null, i+1, j+1);

}

function hooverCells(i, j){

  i = Number(i);
  j = Number(j);
    
  if(i > 0 && j > 0)
    if( matrixTable[i-1][j-1] != 7)
      hooverCell(i-1, j-1);

  if(i > 0)
    if( matrixTable[i-1][j] != 7)
      hooverCell(i-1, j);
    
  if(i > 0 && j < columns - 1)
    if(matrixTable[i-1][j+1] != 7)
      hooverCell(i-1, j+1);

  if(j > 0)
    if(matrixTable[i][j-1] != 7)
      hooverCell(i, j-1);
  
  if(j < columns - 1)
    if(matrixTable[i][j+1] != 7)
      hooverCell(i, j+1);

  if(i < lines - 1 && j > 0)
    if( matrixTable[i+1][j-1] != 7)
      hooverCell(i+1, j-1);

  if(i < lines - 1)
    if( matrixTable[i+1][j] != 7)
      hooverCell(i+1, j);

  if(i < lines - 1 && j < columns - 1)
    if( matrixTable[i+1][j+1] != 7)
      hooverCell(i+1, j+1);

}

function hooverCell(i, j){
  matrixTableUI=document.getElementById("matrixTable");
  var search = `button[prim = '${i}' ][doi =  '${j}']`  ;
  
  var buttonToHoover = matrixTableUI.querySelector(search);

  var previousColor = CULOARE_BUTON;
  buttonToHoover.style.backgroundColor = "red";
  setTimeout(function(buttonToHoover, previousColor){ 
    buttonToHoover.style.backgroundColor = previousColor;
  }, 500, buttonToHoover, previousColor);

}

function showCell(i, j){
  matrixTableUI=document.getElementById("matrixTable");
  matrixTableUI.rows[i].cells[j].innerHTML=" "+matrixTable[i][j]+" ";  
  matrixTable[i][j]=7;
} 

function calculateCellValue(x, y){
  var cellValue;

  x = Number(x);
  y= Number(y);

  if(mineTable[x][y]==0){
    if(x==0&&y==0)
      cellValue = mineTable[0][1]+mineTable[1][1]+mineTable[1][0];  
    if(x==0&&y==columns-1)
      cellValue =mineTable[0][columns-2]+mineTable[1][columns-2]+mineTable[1][columns-1];
    if(x==lines-1&&y==0)
      cellValue =mineTable[lines-1][0]+mineTable[lines-1][1]+mineTable[lines-2][1];
    if(x==lines-1&&y==columns-1)
      cellValue=mineTable[lines-2][columns-2]+mineTable[lines-2][columns-1]+mineTable[lines-1][columns-2];
          //colturi final
  
    if(y==0&&x!=0&&x!=lines-1)
      cellValue=mineTable[x+1][y]+mineTable[x-1][y]+mineTable[x-1][y+1]+mineTable[x][y+1]+mineTable[x+1][y+1];
    if(x==0&&y!=0&&y!=columns-1)
      cellValue=mineTable[x][y-1]+mineTable[x][y+1]+mineTable[x+1][y-1]+mineTable[x+1][y+1]+mineTable[x+1][y];
    if(x==lines-1&&y!=0&&y!=columns-1)
      cellValue=mineTable[x][y-1]+mineTable[x][y+1]+mineTable[x-1][y-1]+mineTable[x-1][y]+mineTable[x-1][y+1];
    if(y==columns-1&&x!=0&&x!=lines-1)
      cellValue=mineTable[x-1][y]+mineTable[x+1][y]+mineTable[x-1][y-1]+mineTable[x][y-1]+mineTable[x+1][y-1];
      //margini final
    if(x!=0&&y!=0&&x!=lines-1&&y!=columns-1)
      cellValue=mineTable[x-1][y-1]+mineTable[x-1][y]+mineTable[x-1][y+1]+mineTable[x][y-1]+mineTable[x][y+1]+mineTable[x+1][y-1]+mineTable[x+1][y]+mineTable[x+1][y+1];
  
  }
  else cellValue = -1;

  return cellValue;

}






