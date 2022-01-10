let estrada;
let personagem;
let carro1;
let carro2;
let carro3;

let somColidiu;
let somPontos;
let somTrilha;

function preload(){
  estrada = loadImage("imgs/estrada.png");
  personagem = loadImage("imgs/personagem.png");
  carro1 = loadImage("imgs/carro-1.png");
  carro2 = loadImage("imgs/carro-2.png");
  carro3 = loadImage("imgs/carro-3.png");
  imagemCarros = [carro1,carro2,carro3,carro1,carro2,carro3];
  
  somColidiu = loadSound("sons/colidiu.mp3");
  somPontos = loadSound("sons/pontos.wav");
  somTrilha = loadSound("sons/trilha.mp3");
}