const texto = document.getElementById('texto');
const container = document.querySelector('.letreiro-container');

let posX = 0;                   // Posição inicial
let direcao = 1;                // 1 = direita, -1 = esquerda
const velocidade = 2;           // Controle da velocidade (px por frame)

function animar() {
  const larguraTexto = texto.offsetWidth;
  const larguraContainer = container.offsetWidth;

  // Atualiza a posição
  posX += direcao * velocidade;

  // Verifica os limites e inverte a direção
  if (posX + larguraTexto >= larguraContainer || posX <= 0) {
    direcao *= -1; // muda a direção
  }

  // Aplica a posição
  texto.style.left = posX + 'px';

  // Rechama a animação
  requestAnimationFrame(animar);
}

// Inicia a animação
animar();
