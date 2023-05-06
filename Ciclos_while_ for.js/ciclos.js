
var d=document.getElementById("dibujito");//metodo del documento que trae un elemento a traves de su id pasando el parametro ejemplo "dibujito"
var lienzo = d.getContext("2d"); //En el getContext un metodo del canvas con el contexto 2d y tambien 3d
var lineas =30;
var l =0; 
var yi, xf;
var colorcito = "green";
var segundalinea = "black"



for(l=0;l<lineas;l++)
{
    yi=10*l;
    xf=10*(l+1);
    dibujarLinea(colorcito,0,yi,xf,300);
    console.log("linea" + l);//nos ayude a depurar con console.log
    l++;
}

//creo un ciclo para hacer las lineas //
//cree la funcion dibujar linea//

dibujarLinea(colorcito,1,1,1,299);
dibujarLinea(colorcito,1,299,299,299);

    function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
    {
        lienzo.beginPath(); 
        lienzo.strokeStyle = color; 
        lienzo.moveTo(yinicial,xinicial);  
        lienzo.lineTo(yfinal,xfinal); 
        lienzo.stroke(); 
        lienzo.closePath();
        lienzo.moveTo(xinicial,yinicial);  
        lienzo.lineTo(xfinal,yfinal); 
        lienzo.stroke(); 
        lienzo.closePath();
        }