const texto = document.getElementById('texto');
const container = document.querySelector('.letreiro-container');

let pos = 0;           // posição inicial
let direcao = 1;       // 1 = direita, -1 = esquerda
let velocidade = 2;    // controla a velocidade (px por frame)

function animar() {
  pos += direcao * velocidade;
  texto.style.left = pos + 'px';

  const larguraTexto = texto.offsetWidth;
  const larguraContainer = container.offsetWidth;

  // Inverte direção quando chega nas bordas
  if (pos + larguraTexto >= larguraContainer) {
    direcao = -1;
  } else if (pos <= 0) {
    direcao = 1;
  }

  requestAnimationFrame(animar);
}

// Inicia a animação
animar();
