function umplere()
{
  b = new Array(10);
  for(i=0;i<10;i++)
    {b[i] = new Array(10);
      for(j=0;j<10;j++)
        b[i][j]=0;}

      lucian=document.getElementById("pelin");

      for(x=0;x<10;x++)

        for(y=0;y<10;y++)
          if(a[x][y]==0)
          {
                             if(x==0&&y==0)
                              b[x][y]=a[0][1]+a[1][1]+a[1][0];  


                            if(x==0&&y==9)
                              b[x][y]=a[0][8]+a[1][8]+a[1][9];


                            if(x==9&&y==0)
                              b[x][y]=a[8][0]+a[9][1]+a[8][1];


                            if(x==9&&y==9)
                              b[x][y]=a[8][8]+a[8][9]+a[9][8];

                                   //colturi final

                                 //margini
                                 if(y==0&&x!=0&&x!=9)
                                  b[x][y]=a[x+1][y]+a[x-1][y]+a[x-1][y+1]+a[x][y+1]+a[x+1][y+1];

                                if(x==0&&y!=0&&y!=9)
                                  b[x][y]=a[x][y-1]+a[x][y+1]+a[x+1][y-1]+a[x+1][y+1]+a[x+1][y];

                                if(x==9&&y!=0&&y!=9)
                                  b[x][y]=a[x][y-1]+a[x][y+1]+a[x-1][y-1]+a[x-1][y]+a[x-1][y+1];


                                if(y==9&&x!=0&&x!=9)
                                  b[x][y]=a[x-1][y]+a[x+1][y]+a[x-1][y-1]+a[x][y-1]+a[x+1][y-1];
                              //margini final





                              if(x!=0&&y!=0&&x!=9&&y!=9)
                                b[x][y]=a[x-1][y-1]+a[x-1][y]+a[x-1][y+1]+a[x][y-1]+a[x][y+1]+a[x+1][y-1]+a[x+1][y]+a[x+1][y+1];

                            }
//lucian.rows[x].cells[y].innerHTML="  "+b[x][y]+" ";

else b[x][y]=-1;



var z=10;

for(x=0;x<10;x++)
  for(y=0;y<10;y++)
    if(b[x][y]==0)
      {var w=0;
        if(x!=0&&b[x-1][y]>=10)
          {b[x][y]=b[x-1][y];
            w=1;}

            if(y!=0&&b[x][y-1]>=10)
              {b[x][y]=b[x][y-1];
                w=1;}

                if(w!=1)
                  {b[x][y]=z;
                    z++;}
}                 //end if
 //end 2nd for

//unirea zonelor

var c;
c=new Array(10);
var k=0;
for(x=1;x<10;x++)
  for(y=0;y<10;y++)
    if(b[x][y]>=10&&b[x-1][y]!=b[x][y]&&b[x-1][y]>=10) 
     {c[k]=b[x-1][y];
      c[k+1]=b[x][y];
      k=k+2;}

                      /*     if(b[x][y-1]=b[x][y]) 
                       {c[k]=b[x][y-1];
                         c[k+1]=b[x][y];
                         k=k+2;} 

     if(b[x][y+1]==b[x][y])
     {c[k]=b[x][y+1];
        c[k+1]=b[x][y];
      k=k+2;}

                             if(b[x+1][y]==b[x][y])
            {c[k]=b[x+1][y];
                        c[k+1]=b[x][y];
                        k=k+2;}     */

                        for(o=0;o<k;o=o+2)
                          {for(x=0;x<10;x++)
                            for(y=0;y<10;y++)

                              if(c[o]==b[x][y])
                                b[x][y]=c[o+1];}



/*for(x=0;x<10;x++)
for(y=0;y<10;y++)
  lucian.rows[x].cells[y].innerHTML="  "+b[x][y]+" ";*/




}









