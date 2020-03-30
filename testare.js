var d,h,g;
function test()
{	
	var s=0,ok=1;
	var p=document.getElementById("razvan");
	for(i=0;i<10;i++)
		for(j=0;j<10;j++)

	//if(a[i][j]==2)
	//s++;

	if(a[i][j]==0)
		ok=0;

	if(ok==1&&q!=2)
	{alert("Ati trecut jocu in "+p.value);
	allmines.proba();
	clearInterval(oraid);
	//setTimeout("stergere();createTabel()",5000);
	tim=1;
	//stergere();
	//createTabel();
	}

}

var sec=0,min=0,tim=1;


function timp()
{var p=document.getElementById("razvan");
h = new Date()
d = new Date(h.getTime() - ora.getTime())
var str = d.getHours()-2 + ":" + d.getMinutes() + ":" + d.getSeconds()
p.value = str
}

function stopare()
{stop=document.getElementById("pi");
lucian=document.getElementById("pelin");

if(reapel==1)
	{clearInterval(oraid);
		reapel=0;
		stop.value="Resume Game";
		lucian.setAttribute("onmouseover","distrugere()");
	}

	else
	{
		g=new Date();
		ora=new Date(g.getTime() - d.getTime())
		oraid=setInterval("timp()",1000);
		reapel=1;
		stop.value="Pause Game";
		lucian.removeAttribute("onmouseover");
	} 
}

function distrugere()
{
	var answer=confirm("Doriti sa reincepeti in fortza?");
	if(answer){
		reapel=0;
		stopare();}
}








