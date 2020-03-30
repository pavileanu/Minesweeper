function createTabel()
{
var corp=document.getElementsByTagName("body")[0];

if(e==0){
	var inceput=document.getElementById("butonstart");
	corp.removeChild(inceput);
	var inceput1=document.getElementById("cheptea");
	corp.removeChild(inceput1);
	var gat=document.getElementById("gata");
	corp.removeChild(gat);
	e=1;}


 var y=document.createElement("input");
 y.setAttribute("type","button");
 y.setAttribute("onclick","stergere();createTabel()");
 y.setAttribute("value","New game");
 y.setAttribute("id","anka");
 corp.appendChild(y);


 var z=document.createElement("input")
 z.setAttribute("type","text");

 z.setAttribute("id","razvan");
 z.setAttribute("align","center");
 corp.appendChild(z);

 var stopceas=document.createElement("input");
 stopceas.setAttribute("type","button");

 stopceas.setAttribute("id","pi");
 corp.appendChild(stopceas);

 var r=document.createElement("input");
 r.setAttribute("type","button");
 r.setAttribute("onclick","window.location.reload()");
 r.setAttribute("value","Main Menu");
 r.setAttribute("id","zein");
 corp.appendChild(r);

 umplere();

 var table=document.createElement("table");

 for(i=0;i<10;i++){
    var tr=document.createElement("tr");
    for(j=0;j<10;j++){
       var td=document.createElement("td");
       var casuta=document.createElement("button");
       casuta.style.background = CULOARE_BUTON;


       if(a[i][j]!=2&&reapel==1){
          casuta.setAttribute("onclick","change1(event);test()");    
          casuta.setAttribute("prim", i) 
          casuta.setAttribute("doi", j);}

          td.appendChild(casuta);
          td.setAttribute("height"," 55px");
          td.setAttribute("width"," 50px");
          td.style.background = CULOARE_TD;
          tr.appendChild(td);}

          table.appendChild(tr);

          corp.appendChild(table);
          table.setAttribute("border",1);
          table.style.position="absolute";                
          table.style.left=200;       
          table.style.top=100;         

          table.setAttribute("id","pelin");

          stopceas.setAttribute("value","Pause Game");

          stopceas.setAttribute("onclick","stopare()");}}