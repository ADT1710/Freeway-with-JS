let xPersonagem = 85;
let yPersonagem = 366;
let comprimentoPersonagem = 30;
let alturaPersonagem = 30;

let meusPontos = 0;

let colidiu = false;


function mostraPersonagem(){
  image(personagem, xPersonagem,yPersonagem,comprimentoPersonagem,alturaPersonagem);
}

function movimentaPersonagem(){
  if(keyIsDown(UP_ARROW)){
    yPersonagem -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(yPersonagem < 366) yPersonagem += 3;
  }
}


function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
  colidiu = collideRectCircle(xCarros[i], yCarros[i],   comprimentoCarro,alturaCarro,xPersonagem,yPersonagem,15);
    if (colidiu){
      volteInicio();
      if(meusPontos != 0){
        somColidiu.play();
        meusPontos--;
      }
    }
  }
}

function volteInicio(){
  yPersonagem = 366;
}

function mostraPontos(){
  textAlign(CENTER);
  fill(255,240,60);
  textSize(25);
  text(meusPontos, width/5,27);
}

function somaPontos(){
  if(yPersonagem < 19){
    somPontos.play();
    meusPontos++;
    volteInicio();
  }
}