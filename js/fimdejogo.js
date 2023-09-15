// Função para bloquear o botão de voltar após o usuário perder o jogo
function bloquearBotaoVoltar() {
    // Adicionar um evento de aviso quando o usuário tentar voltar
    window.addEventListener('beforeunload', function (e) {
        // Cancelar a ação padrão do navegador
        e.preventDefault();
        // Definir uma mensagem personalizada
        e.returnValue = 'Você perdeu o jogo. Inicie um novo jogo para continuar.'; 
    });
}

// Chame essa função quando o usuário perder o jogo
bloquearBotaoVoltar();
