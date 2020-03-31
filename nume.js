
var q=0;
function change1(ev)
{var t,i,j;


x=ev.target.getAttribute("prim");
y=ev.target.getAttribute("doi");


matrixTable=document.getElementById("matrixTable");

                                    /* if(a[x][y]==0)
{
                             //colturile
if(x==0&&y==0)
t=a[0][1]+a[1][1]+a[1][0];  


if(x==0&&y==9)
t=a[0][8]+a[1][8]+a[1][9];


if(x==9&&y==0)
t=a[8][0]+a[9][1]+a[8][1];


if(x==9&&y==9)
t=a[8][8]+a[8][9]+a[9][8];

                                   //colturi final

                                 //margini
if(y==0&&x!=0&&x!=9)
t=a[x+1][y]+a[x-1][y]+a[x-1][y+1]+a[x][y+1]+a[x+1][y+1];

if(x==0&&y!=0&&y!=9)
t=a[x][y-1]+a[x][y+1]+a[x+1][y-1]+a[x+1][y+1]+a[x+1][y];

if(x==9&&y!=0&&y!=9)
t=a[x][y-1]+a[x][y+1]+a[x-1][y-1]+a[x-1][y]+a[x-1][y+1];


if(y==9&&x!=0&&x!=9)
t=a[x-1][y]+a[x+1][y]+a[x-1][y-1]+a[x][y-1]+a[x+1][y-1];
                              //margini final





if(x!=0&&y!=0&&x!=9&&y!=9)
t=a[x-1][y-1]+a[x-1][y]+a[x-1][y+1]+a[x][y-1]+a[x][y+1]+a[x+1][y-1]+a[x+1][y]+a[x+1][y+1];

matrixTable.rows[x].cells[y].innerHTML="  "+t+" ";}

else
matrixTable.rows[x].cells[y].innerHTML="bomba";*/



t=b[x][y];

//alert(t);


if(t>=10)
{
for(i=0;i<10;i++)
for(j=0;j<10;j++)
 if(b[i][j]==t) 
{matrixTable.rows[i].cells[j].innerHTML=" "+0+" ";
   a[i][j]=2;            }

for(i=1;i<9;i++)
for(j=1;j<9;j++)
if(b[i][j]==t)
{if(b[i-1][j]<10)
 {matrixTable.rows[i-1].cells[j].innerHTML=" "+b[i-1][j]+" ";  a[i-1][j]=2;}
if(b[i-1][j-1]<10)
 {matrixTable.rows[i-1].cells[j-1].innerHTML=" "+b[i-1][j-1]+" ";  a[i-1][j-1]=2;}

if(b[i-1][j+1]<10)
 {matrixTable.rows[i-1].cells[j+1].innerHTML=" "+b[i-1][j+1]+" ";  a[i-1][j+1]=2;}

if(b[i][j-1]<10)
 {matrixTable.rows[i].cells[j-1].innerHTML=" "+b[i][j-1]+" "; a[i][j-1]!=2;}

if(b[i][j+1]<10)
 {matrixTable.rows[i].cells[j+1].innerHTML=" "+b[i][j+1]+" "; a[i][j+1]=2;}

if(b[i+1][j-1]<10)
{ matrixTable.rows[i+1].cells[j-1].innerHTML=" "+b[i+1][j-1]+" ";  a[i+1][j-1]=2;}

if(b[i+1][j]<10)
{ matrixTable.rows[i+1].cells[j].innerHTML=" "+b[i+1][j]+" ";    a[i+1][j]=2;}

if(b[i+1][j+1]<10)

{
 matrixTable.rows[i+1].cells[j+1].innerHTML=" "+b[i+1][j+1]+" ";  a[i+1][j+1]=2;}
}


for(i=2;i<=8;i++)
{if(b[0][i]==t)                  //linia 1
      {if(b[0][i-1]<10)
 {matrixTable.rows[0].cells[i-1].innerHTML=" "+b[0][i-1]+" ";  a[0][i-1]=2;}
          
if(b[0][i+1]<10)
 {matrixTable.rows[0].cells[i+1].innerHTML=" "+b[0][i+1]+" ";  a[0][i+1]=2;}


if(b[1][i-1]<10)
       { matrixTable.rows[1].cells[i-1].innerHTML=" "+b[1][i-1]+" ";   a[1][i-1]=2;}
 
         if(b[1][i]<10)

     {matrixTable.rows[1].cells[i].innerHTML=" "+b[1][i]+" ";            a[1][i]=2;}
            if(b[1][i+1]<10)
       {matrixTable.rows[1].cells[i+1].innerHTML=" "+b[1][i+1]+" ";      a[1][i+1]=2;}
}
  

//coloana stanga

if(b[i][0]==t)
{ if(b[i-1 ][0]<10)
{ matrixTable.rows[i-1].cells[0].innerHTML=" "+b[i-1][0]+" ";   a[i-1][0]=2;}

 if(b[i+1][0]<10)
{matrixTable.rows[i+1].cells[0].innerHTML=" "+b[i+1][0]+" ";       a[i+1][0]=2;}
if(b[i-1][1]<10)
{matrixTable.rows[i-1].cells[1].innerHTML=" "+b[i-1][1]+" ";         a[i-1][1]=2;}

if(b[i][1]<10)
{matrixTable.rows[i].cells[1].innerHTML=" "+b[i][1]+" ";               a[i][1]=2;}
if(b[i+1][1]<10)
{matrixTable.rows[i+1].cells[1].innerHTML=" "+b[i+1][1]+" ";          a[i+1][1]=2;}
}


 if(b[i][9]==t)          //coloana dreapta

{if(b[i-1][9]<10)
{matrixTable.rows[i-1].cells[9].innerHTML=" "+b[i-1][9]+" "; a[i-1][9]=2;}

if(b[i+1][9]<10)
{matrixTable.rows[i+1].cells[9].innerHTML=" "+b[i+1][9]+" ";   a[i+1][9]=2;}


if(b[i-1][8]<10)

{matrixTable.rows[i-1].cells[8].innerHTML=" "+b[i-1][8]+" ";  a[i-1][8]=2;}
if(b[i][8]<10)

{matrixTable.rows[i].cells[8].innerHTML=" "+b[i][8]+" ";   a[i][8]=2;}
if(b[i+1][8]<10)
{matrixTable.rows[i+1].cells[8].innerHTML=" "+b[i+1][8]+" ";    a[i+1][8]=2;}
}


if(b[9][i]==t)            // linia jos
{if(b[9][i-1]<10)

{matrixTable.rows[9].cells[i-1].innerHTML=" "+b[9][i-1]+" ";      a[9][i-1]=2;}
if(b[9][i+1]<10)

{matrixTable.rows[9].cells[i+1].innerHTML=" "+b[9][i+1]+" ";        a[9][i+1]=2;}

if(b[8][i-1]<10)
{matrixTable.rows[8].cells[i-1].innerHTML=" "+b[8][i-1]+" ";       a[8][i-1]=2;}

if(b[8][i]<10)       

{matrixTable.rows[8].cells[i].innerHTML=" "+b[8][i]+" ";             a[8][i]=2;}

if(b[8][i+1]<10)

{matrixTable.rows[8].cells[i+1].innerHTML=" "+b[8][i+1]+" ";             a[8][i+1]=2;}
}










}
             







}

if(t>=1&&t<=9)
{matrixTable.rows[x].cells[y].innerHTML=" "+t+" ";  a[x][y]=2;}




if(t==-1)
{q++;
imagine=document.getElementById("bombImage");
matrixTable.rows[x].cells[y].innerHTML='<img  src="bomba.jpg"  id="bombImage" style="position:relative;  width:50px; height:50px;">';
if(q==1)
alert("Mai ai o sansa!");
if(q==2)
{alert("noob!");

toateminele.proba();
clearInterval(oraid);
setTimeout("removeGame();startGame()",5000);
tim=1;
}}





}











