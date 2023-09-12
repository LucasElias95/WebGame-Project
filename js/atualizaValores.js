// Função para obter o valor atual do dinheiro do armazenamento local
function getDinheiro() {
    const dinheiro = localStorage.getItem('dinheiro');
    return dinheiro ? parseInt(dinheiro) : 0;
  }
  
  // Função para atualizar o valor do dinheiro na página
  function atualizarDinheiroNaPagina() {
    const dinheiroAtual = getDinheiro();
    const dinheiroElement = document.getElementById('dinheiro');
    dinheiroElement.textContent = dinheiroAtual;
  }
  

// Função para obter o valor atual do inteligencia do armazenamento local
function getInteligencia() {
  const inteligencia = localStorage.getItem('inteligencia');
  return inteligencia ? parseInt(inteligencia) : 0;
}

// Função para atualizar o valor da inteligência na página
function atualizarInteligenciaNaPagina() {
  const inteligenciaAtual = getInteligencia();
  const inteligenciaElement = document.getElementById('inteligencia');
  inteligenciaElement.textContent = inteligenciaAtual;
}

  // Adicione um evento de carga para atualizar o valor do dinheiro em todas as paginas"

  window.addEventListener('load', function () {
    atualizarDinheiroNaPagina();
    atualizarInteligenciaNaPagina();
  });
  