function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(estrada);
  mostraPersonagem();
  mostraCarro();
  movimentaCarro();
  movimentaPersonagem();
  retornaCarro();
  verificaColisao();
  mostraPontos();
  somaPontos();
}



