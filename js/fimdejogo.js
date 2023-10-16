window.addEventListener('beforeunload', function (event) {
  event.preventDefault();
  event.returnValue = 'Seu jogo acabou. Voltar à página anterior carregará um novo jogo sem dinheiro, vida e habilidades.';
});

function getDinheiro() {
  const dinheiro = localStorage.getItem('dinheiro');
  return dinheiro ? parseInt(dinheiro) : selectedPersonagem.dinheiro;
}

function atualizarDinheiro(novoValor) {
  localStorage.setItem('dinheiro', novoValor.toString());
  const dinheiroElement = document.getElementById('dinheiro');
  dinheiroElement.textContent = novoValor;
}

// Certifique-se de ter um valor para "novoValor"
const novoValor = getDinheiro();

// Chame a função para atualizar o dinheiro
atualizarDinheiro(novoValor);

  window.addEventListener('unload', function () {
    // Limpa o localStorage
    localStorage.clear();

})