// Configurações
const letreiro = document.getElementById('letreiro');
const container = document.querySelector('.container');

// Requisito g: Velocidade (maior número = mais rápido)
const velocidade = 2; 

let posicao = 0; // Posição inicial: 0 (canto esquerdo interno)
let direcao = 1; // Requisito b: Direção inicial: 1 (direita)

/**
 * Função principal para mover o letreiro.
 */
function moverLetreiro() {
  // Obtém os tamanhos e as dimensões internas do container
  const larguraLetreiro = letreiro.offsetWidth;
  // clientWidth: Largura interna do conteúdo (ignora padding e bordas)
  const larguraInternaContainer = container.clientWidth; 
  
  // O limite esquerdo é 0 (borda esquerda interna)
  const LIMITE_ESQUERDO = 0; 
  
  // O limite direito é a largura interna menos a largura do letreiro
  const LIMITE_DIREITO = larguraInternaContainer - larguraLetreiro; 

  // 1. Atualiza a posição
  posicao += direcao * velocidade;
  letreiro.style.left = posicao + "px"; // Move o elemento

  // 2. Inverte a direção e corrige a posição (Correção de Bug)

  if (posicao >= LIMITE_DIREITO) {
    // Atingiu o limite direito
    direcao = -1; // Inverte para a esquerda
    // Força o letreiro para a posição exata do limite
    posicao = LIMITE_DIREITO; 
  } else if (posicao <= LIMITE_ESQUERDO) {
    // Atingiu o limite esquerdo
    direcao = 1; // Inverte para a direita
    // Força o letreiro para a posição exata do limite
    posicao = LIMITE_ESQUERDO;
  }

  // Chama a função novamente no próximo quadro da animação
  requestAnimationFrame(moverLetreiro);
}

// Inicia o letreiro
moverLetreiro();