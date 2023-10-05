window.addEventListener('beforeunload', function (event) {
    event.preventDefault();
    event.returnValue = 'Seu jogo acabou. Voltar à página anterior carregará um novo jogo sem dinheiro, vida e habilidades.';
  });

  window.addEventListener('unload', function () {
    // Limpa o localStorage
    localStorage.clear();

})