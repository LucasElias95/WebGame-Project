// Função para obter o valor atual do dinheiro do armazenamento local
function getDinheiro() {
    const dinheiro = localStorage.getItem('dinheiro');
    return dinheiro ? parseInt(dinheiro) : 0;
  }
  

  function atualizarDinheiro(novoValor) {
    localStorage.setItem('dinheiro', novoValor.toString());
    const dinheiroElement = document.getElementById('dinheiroDisplay'); // Alterado para 'dinheiroDisplay'
    dinheiroElement.textContent = novoValor;
}
  

// Função para obter o valor atual do inteligencia do armazenamento local
function getInteligencia() {
  const inteligencia = localStorage.getItem('inteligencia');
  return inteligencia ? parseInt(inteligencia) : 0;
}

// Função para atualizar o valor da inteligência na página e no armazenamento local
function atualizarInteligencia(novoValor) {
  localStorage.setItem('inteligencia', novoValor.toString());
  const inteligenciaElement = document.getElementById('inteligencia');
  inteligenciaElement.textContent = novoValor;
}

  
// Função para atualizar o valor do dinheiro na página
function atualizarDinheiroNaPagina() {
  const dinheiroAtual = getDinheiro();
  const dinheiroElement = document.getElementById('dinheiroDisplay');
  dinheiroElement.textContent = dinheiroAtual;
}


window.addEventListener('load', function () {
  atualizarDinheiroNaPagina();
  atualizarInteligencia(getInteligencia()); // Passa o valor da inteligência do armazenamento local
});

  
  