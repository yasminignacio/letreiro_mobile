// Configurações
const letreiro = document.getElementById('letreiro');
const container = document.querySelector('.container');
let posicao = 0;
let direcao = 1; // 1 = direita, -1 = esquerda
const velocidade = 2; // controle da velocidade do letreiro

function moverLetreiro() {
  const larguraLetreiro = letreiro.offsetWidth;
  const larguraContainer = container.offsetWidth;

  // Atualiza posição
  posicao += direcao * velocidade;
  letreiro.style.left = posicao + "px";

  // Inverte direção ao atingir as bordas
  if (posicao + larguraLetreiro >= larguraContainer || posicao <= 0) {
    direcao *= -1;
  }

  requestAnimationFrame(moverLetreiro);
}

moverLetreiro();
