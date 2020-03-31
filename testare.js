var d,h,g;

var sec=0,min=0,tim=1;


function timp()
{var p=document.getElementById("gameTimer");
h = new Date()
d = new Date(h.getTime() - ora.getTime())
var str = d.getHours()-2 + ":" + d.getMinutes() + ":" + d.getSeconds()
p.value = str
}

function stopare()
{stop=document.getElementById("pauseGame");
matrixTable=document.getElementById("matrixTable");

if(reapel==1)
	{clearInterval(oraid);
		reapel=0;
		stop.value="Resume Game";
		matrixTable.setAttribute("onmouseover","distrugere()");
	}

	else
	{
		g=new Date();
		ora=new Date(g.getTime() - d.getTime())
		oraid=setInterval("timp()",1000);
		reapel=1;
		stop.value="Pause Game";
		matrixTable.removeAttribute("onmouseover");
	} 
}

function distrugere()
{
	var answer=confirm("Doriti sa reincepeti in fortza?");
	if(answer){
		reapel=0;
		stopare();}
}








