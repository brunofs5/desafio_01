var canvas;
var pincel;
var WIDTH;
var HEIGHT;
var preto;
var x;
var intervalo;

preto = "black";
WIDTH = 600;
HEIGHT = 400;
x = 599;
intervalo = setInterval(desenhar, 2);

canvas = document.getElementById("meuCanvas");
pincel = canvas.getContext("2d");

function circulo(x, y, raio){
    pincel.fillStyle = preto;
    pincel.beginPath();
    pincel.arc(x,y,raio,0,2*Math.PI);
    pincel.fill();

}

function limpacanvas(){
    pincel.clearRect(0,0,WIDTH,HEIGHT);
}

function desenhar(){
    limpacanvas();
    circulo(x,100,10);
    x--;
}

function strart(){
    intervalo;
}

strart();
