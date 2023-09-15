const vidaElement = document.getElementById('vida');
const botaoPublico = document.getElementById('publico');
const botaoParticular = document.getElementById('particular');

const curaVida = {
    'publico': 5,
    'particular': 15,

};

const custoVida = {
    'publico': 0,
    'particular': 1000,
   
}

const tempoVida = {
    'publico': 1,
    'particular': 2,
}

function getVida() {
    const vida = localStorage.getItem('vida');
    return vida ? parseInt(vida) : 0;
  }
  
  function atualizarVida(novoValorVida) {
    localStorage.setItem('vida', novoValorVida.toString());
    vidaElement.textContent = novoValorVida;
  }

//BOTÕES IR
botaoPublico.addEventListener('click', function () {
    if (localStorage.getItem("vida") <100){
    const curarVida = curaVida['publico'];
    const vidaAtual = getVida();
    const novaVida = vidaAtual + curarVida;
    atualizarVida(novaVida);

    // Diminuir o dinheiro
    const CustoCura = custoVida['publico'];
    const dinheiroAtual = getDinheiro();
    const novoDinheiro = dinheiroAtual - CustoCura; 
    atualizarDinheiro(novoDinheiro);

    //atualizar idade
    const tempoDeCura = tempoVida['publico'];
    const idadeAtual = getIdade();
    const novaIdade = idadeAtual + tempoDeCura;
    atualizarIdade(novaIdade)
    
    }else {
        // Caso contrário, exiba um alerta
        alert("Sua Vida já está cheia!");
    }
});

botaoParticular.addEventListener('click', function () {
    if (localStorage.getItem("vida") <100){
    const curarVida = curaVida['particular'];
    const vidaAtual = getVida();
    const novaVida = vidaAtual + curarVida;
    atualizarVida(novaVida);

    // Diminuir o dinheiro
    const CustoCura = custoVida['particular'];
    const dinheiroAtual = getDinheiro();
    const novoDinheiro = dinheiroAtual - CustoCura; 
    atualizarDinheiro(novoDinheiro);

    //atualizar idade
    const tempoDeCura = tempoVida['particular'];
    const idadeAtual = getIdade();
    const novaIdade = idadeAtual + tempoDeCura;
    atualizarIdade(novaIdade)

    }else {
        // Caso contrário, exiba um alerta
        alert("Sua Vida já está cheia!");
    }
});

