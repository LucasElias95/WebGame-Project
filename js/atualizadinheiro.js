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
  
  // Adicione um evento de carga para atualizar o valor do dinheiro na página "Bairros"
  window.addEventListener('load', function () {
    atualizarDinheiroNaPagina();
  });
  