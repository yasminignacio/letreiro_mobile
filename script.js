// Configurações
const letreiro = document.getElementById('letreiro');
const container = document.querySelector('.container');

// Requisito g: Velocidade
const velocidade = 2; 

let posicao = 0; // Posição inicial
let direcao = 1; // Direção inicial (direita)

// O padding horizontal é de 15px em cada lado (style.css: padding: 10px 15px;)
const PADDING_HORIZONTAL = 30; // 15px (esquerda) + 15px (direita)

/**
 * Função principal para mover o letreiro.
 */
function moverLetreiro() {
  
  // 1. Obtém as dimensões
  const larguraLetreiro = letreiro.offsetWidth;
  // Largura total do container (inclui padding)
  const larguraTotalContainer = container.offsetWidth; 
  
  // O limite esquerdo é o valor do padding (15px)
  const LIMITE_ESQUERDO = 15; 
  
  // O limite direito é a borda direita (largura total) MENOS o padding direito (15px) 
  // MENOS a largura do próprio letreiro
  const LIMITE_DIREITO = larguraTotalContainer - 15 - larguraLetreiro; 

  // 2. Atualiza a posição
  posicao += direcao * velocidade;
  letreiro.style.left = posicao + "px"; // Move o elemento

  // 3. Inverte a direção e corrige a posição

  if (posicao >= LIMITE_DIREITO) {
    // Atingiu o limite direito
    direcao = -1; // Inverte para a esquerda
    // Força o letreiro para a posição exata
    posicao = LIMITE_DIREITO; 
  } else if (posicao <= LIMITE_ESQUERDO) {
    // Atingiu o limite esquerdo
    direcao = 1; // Inverte para a direita
    // Força o letreiro para a posição exata
    posicao = LIMITE_ESQUERDO;
  }

  // Chama a função novamente no próximo quadro da animação
  requestAnimationFrame(moverLetreiro);
}

// Inicializa a posição do letreiro com o padding inicial
letreiro.style.left = '15px'; 
// Inicia o letreiro
moverLetreiro();