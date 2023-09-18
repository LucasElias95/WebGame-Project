// Selecionando os botões de "TREINAR"
const botaoSozinho = document.getElementById('sozinho');
const botaoAcademia = document.getElementById('treinoAcademia');
const botaoArtesMarciais = document.getElementById('artesMarciais');
const forcaElement = document.getElementById('força');



//VALORES FORÇA
const atributoForca = {
    'sozinho': 1,
    'treinoAcademia': 5,
    'artesMarciais': 10,
};

const custoTreino = {
    'sozinho': 0,
    'treinoAcademia': -500,
    'artesMarciais': -1000,
}

const tempoTreino = {
    'sozinho': 1,
    'treinoAcademia': 2,
    'artesMarciais': 3,
}

// Função para obter o valor atual da força do armazenamento local
function getForca() {
    const str = localStorage.getItem('força');
    return str ? parseInt(str) : 0;
}

// Função para atualizar o valor da força na página e no armazenamento local
function atualizarForca(novoValor) {
    localStorage.setItem('força', novoValor.toString());
    forcaElement.textContent = novoValor;
}

//BOTÕES FORÇA
botaoSozinho.addEventListener('click', function () {
    const atributoDeForca = atributoForca['sozinho'];
    const forcaAtual = getForca();
    const novaForca = forcaAtual + atributoDeForca;
    atualizarForca(novaForca);

    // Diminuir o dinheiro
    const CustoDeTreino = custoTreino['sozinho'];
    const dinheiroAtual = getDinheiro();
    const novoDinheiro = dinheiroAtual + CustoDeTreino; 
    atualizarDinheiro(novoDinheiro);

    //atualizar idade
    const tempoDeTreino = tempoTreino['sozinho'];
    const idadeAtual = getIdade();
    const mesesAtuais = idadeAtual % 12; // Calcula os meses atuais
    const anosAtuais = getAnos();
    
    if (mesesAtuais + tempoDeTreino >= 12) {
      const novosAnos = anosAtuais + 1;
      const novaIdade = mesesAtuais + tempoDeTreino - 12;
      atualizarAnos(novosAnos);
      atualizarIdade(novaIdade);
    } else {
      const novaIdade = idadeAtual + tempoDeTreino;
      atualizarIdade(novaIdade);
    }
});


botaoAcademia.addEventListener('click', function () {
    if (localStorage.getItem("dinheiro") >= 500) {
        const atributoDeForca = atributoForca['treinoAcademia'];
        const forcaAtual = getForca();
        const novaForca = forcaAtual + atributoDeForca;
        atualizarForca(novaForca);

    // Diminuir o dinheiro
    const CustoDeTreino = custoTreino['treinoAcademia'];
    const dinheiroAtual = getDinheiro();
    const novoDinheiro = dinheiroAtual + CustoDeTreino; 
    atualizarDinheiro(novoDinheiro);

     //atualizar idade
     const tempoDeTreino = tempoTreino['treinoAcademia'];
     const idadeAtual = getIdade();
     const mesesAtuais = idadeAtual % 12; // Calcula os meses atuais
     const anosAtuais = getAnos();
     
     if (mesesAtuais + tempoDeTreino >= 12) {
       const novosAnos = anosAtuais + 1;
       const novaIdade = mesesAtuais + tempoDeTreino - 12;
       atualizarAnos(novosAnos);
       atualizarIdade(novaIdade);
     } else {
       const novaIdade = idadeAtual + tempoDeTreino;
       atualizarIdade(novaIdade);
     }

    } else {
        // Caso contrário, exiba um alerta
        alert("Você não possui dinheiro!");
    }
});

botaoArtesMarciais.addEventListener('click', function () {
    if (localStorage.getItem("dinheiro") >= 1000) {
        const atributoDeForca = atributoForca['artesMarciais'];
        const forcaAtual = getForca();
        const novaForca = forcaAtual + atributoDeForca;
        atualizarForca(novaForca);

    // Diminuir o dinheiro
    const CustoDeTreino = custoTreino['artesMarciais'];
    const dinheiroAtual = getDinheiro();
    const novoDinheiro = dinheiroAtual + CustoDeTreino; 
    atualizarDinheiro(novoDinheiro);

     //atualizar idade
     const tempoDeTreino = tempoTreino['artesMarciais'];
     const idadeAtual = getIdade();
     const mesesAtuais = idadeAtual % 12; // Calcula os meses atuais
     const anosAtuais = getAnos();
     
     if (mesesAtuais + tempoDeTreino >= 12) {
       const novosAnos = anosAtuais + 1;
       const novaIdade = mesesAtuais + tempoDeTreino - 12;
       atualizarAnos(novosAnos);
       atualizarIdade(novaIdade);
     } else {
       const novaIdade = idadeAtual + tempoDeTreino;
       atualizarIdade(novaIdade);
     }

    } else {
        // Caso contrário, exiba um alerta
        alert("Você não possui dinheiro!");
    }
});

// Verifique a força atual e defina-a se for a primeira vez
const ForcaAtual = getForca();
if (ForcaAtual === 0) {
    localStorage.setItem('força', '0');
}

// Atualize a Força na página de estatísticas
atualizarForca(ForcaAtual);