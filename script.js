// Configurações
const letreiro = document.getElementById('letreiro');
const container = document.querySelector('.container');
let posicao = 0; // Posição inicial: 0 (canto esquerdo)
let direcao = 1; // Requisito b: Direção inicial: 1 (direita)
const velocidade = 2; // Requisito g: Controle da velocidade (maior número = mais rápido)

/**
 * Função principal para mover o letreiro.
 * Utiliza requestAnimationFrame para animação suave.
 */
function moverLetreiro() {
  // Garante que o cálculo seja feito com os tamanhos atualizados (útil em redimensionamento)
  const larguraLetreiro = letreiro.offsetWidth;
  const larguraContainer = container.offsetWidth;

  // 1. Atualiza a posição
  posicao += direcao * velocidade;
  letreiro.style.left = posicao + "px"; // Move o elemento

  // 2. Inverte a direção ao atingir as bordas (Requisito a)
  // Condição para inverter a direção para a esquerda:
  // Se a borda direita do letreiro (posicao + larguraLetreiro) atingir ou ultrapassar 
  // a borda direita do container (larguraContainer).
  const atingiuDireita = posicao + larguraLetreiro >= larguraContainer;
  
  // Condição para inverter a direção para a direita:
  // Se a borda esquerda do letreiro (posicao) atingir ou ultrapassar 
  // a borda esquerda do container (0).
  const atingiuEsquerda = posicao <= 0; 

  if (atingiuDireita) {
    direcao = -1; // Inverte para a esquerda
    // Ajusta a posição para evitar que ele fique 'preso' na borda
    posicao = larguraContainer - larguraLetreiro; 
  } else if (atingiuEsquerda) {
    direcao = 1; // Inverte para a direita
    // Ajusta a posição para evitar que ele fique 'preso' na borda
    posicao = 0;
  }

  // Chama a função novamente no próximo quadro da animação
  requestAnimationFrame(moverLetreiro);
}

// Inicia o letreiro (Requisito b: Da esquerda para a direita)
moverLetreiro();
