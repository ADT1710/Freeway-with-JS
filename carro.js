let xCarros = [600,600,600,600,600,600];
let yCarros = [40,96,150,210,270,318];
let velocidades = [2,2.5,3.2,5,3.5,2.2];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i],yCarros[i],50,40);

  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidades[i];
  }
}

function retornaCarro(){
    for (let i = 0; i < imagemCarros.length; i++){
      if(passouTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTela(xCarro){
  return xCarro < -50;
}