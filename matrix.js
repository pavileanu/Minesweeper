function createUITable(){
    var body=document.getElementsByTagName("body")[0];
    var table=document.createElement("table");
    numberOfFlaggedMines = 0;
    flaggedMines = [];
    for(i=0;i<10;i++){
      var tr=document.createElement("tr");
      for(j=0;j<10;j++){
        var td=document.createElement("td");
        var casuta=document.createElement("button");
        casuta.style.background = CULOARE_BUTON;

        casuta.setAttribute("onclick","cellMatrixClicked(event, null, null)");    
        casuta.setAttribute("prim", i);
        casuta.setAttribute("doi", j);
        td.setAttribute("prim", i);
        td.setAttribute("doi", j);

        td.setAttribute("onclick", "indicatorPressed(event)");

        addRightClickEvenCell(casuta);

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


function FlaggedMinesArroundCell(i, j){
 
  var flaggedMinesSelected = [];
  for(k = 0; k < flaggedMines.length; k++){
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
}

function indicatorPressed(ev)
{
  var x=ev.target.getAttribute("prim");
  var y=ev.target.getAttribute("doi");
  var fm = FlaggedMinesArroundCell(x, y);
  if (fm == null) fm = [];
  var checkCount = 0;
  if(fm.length > 0)
  {
    for(var k = 0; k < fm.length; k++)
      if(matrixTable[fm[k].x][fm[k].y] == -1)
        checkCount++;

    if(checkCount == fm.length){
      showCells(x, y);
    }
    else{
      loose();
    }

  }
  hooverCells(x, y);
}


function hooverCells(i, j){
//Number(
  if(matrixTable[i-1][j-1] != 7){
    hooverCell(i-1, j-1);
  }

  //try{
  if(matrixTable[i-1][j] != 7)
    hooverCell(i-1, j);
  
  //}catch{}

  //try{
    if(matrixTable[Number(i)-1][Number(j)+1] != 7)
      hooverCell(Number(i)-1, Number(j)+1);
  //}
  //catch{}

  //try{
  if(matrixTable[i][j-1] != 7)
    hooverCell(i, j-1);
  //}catch{}

  //try{
  if(matrixTable[i][Number(j)+1] != 7)
    hooverCell(i, Number(j)+1);
  
  //}catch{}

  //try{
    if(matrixTable[Number(i)+1][j-1] != 7)
      hooverCell(Number(i)+1, j-1);
  //}
  //catch{}

  //try{
    if(matrixTable[Number(i)+1][j] != 7)
      hooverCell(Number(i)+1, j);
  //}
  //catch{}

  //try{
    if(matrixTable[Number(i)+1][Number(j)+1] != 7)
      hooverCell(Number(i)+1, Number(j)+1);
  //}
  //catch{}

}

function loose(){
  alert("noob!");
  showMineTable();
  clearInterval(timerId);
  var gameMatrix = document.getElementById("matrixTable");
  gameMatrix.querySelectorAll('button').forEach(function(button){button.setAttribute("disabled", "true");});
}


function showCells(i, j){
  try{
    if(martixTable[i-1][j-1] != -1)
      showCell(i-1, j-1);
  }
  catch{
    return;
  }

  try{
    if(matrixTable[i-1][j] != -1)
      showCell(i-1, j);
    }
  catch{}

  try{
    if(matrixTable[i-1][j+1] != -1)
      showCell(i-1, j+1);
  }
  catch{}

  try{
  if(matrixTable[i][j-1] != -1)
    showCell(i, j-1);}
  catch{}

  try{
  if(matrixTable[i][j+1] != -1)
    showCell(i, j+1);
  }
  catch{}

  try{
    if(matrixTable[i+1][j-1] != -1)
      showCell(i+1, j-1);
  }
  catch{}

  try{
    if(matrixTable[i+1][j] != -1)
      showCell(i+1, j);
  }
  catch{}

  try{
    if(matrixTable[i+1][j+1] != -1)
      showCell(i+1, j+1);
  }
  catch{}
}

function hooverCell(i, j){
  matrixTableUI=document.getElementById("matrixTable");
  var search = `[prim = '${i}' ][doi =  '${j}']`  ;
  
  var buttonToHoover = matrixTableUI.querySelector(search);
  //debugger;

  var previousColor = buttonToHoover.style.backgroundColor;
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






