var tela;
var pincel;
var WIDTH;
var HEIGHT;
var cor;
var x;
var intervalo;

cor = "black";
WIDTH = 600;
HEIGHT = 400;
x = 599;
intervalo = setInterval(desenhar, 2);

tela = document.getElementById("meuCanvas");
pincel = tela.getContext("2d");

function circulo(x, y, raio){
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x,y,raio,0,2*Math.PI);
    pincel.fill();

}

function limpaTela(){
    pincel.clearRect(0,0,WIDTH,HEIGHT);
}

function desenhar(){
    limpaTela();
    circulo(x,100,10);
    x--;
}

function strart(){
    intervalo;
}

strart();
