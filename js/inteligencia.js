// Selecionando os botões de "ESTUDAR"
const botaoAulaSozinho = document.getElementById('aulaSozinho');
const botaoAulaEscola = document.getElementById('aulaEscola');
const botaoAulaParticular = document.getElementById('aulaParticular');
const inteligencia = document.getElementById('inteligencia');


//  VALORES INTELIGÊNCIA
const atributoInteligencia = {
    'aulaSozinho': 1,
    'aulaEscola': 5,
    'aulaParticular': 10,
};

const custoInteligencia = {
    'aulaSozinho': 0,
    'aulaEscola': -500,
    'aulaParticular': -1000,
}

const tempoEstudo = {
    'aulaSozinho': 1,
    'aulaEscola': 2,
    'aulaParticular': 3,
}

// Função para obter o valor atual da inteligencia do armazenamento local
function getInteligencia() {
    const int = localStorage.getItem('inteligencia');
    return int ? parseInt(int) : 0;
}
// Função para atualizar o valor da inteligencia na página e no armazenamento local
function atualizarInteligencia(novoValor) {
    localStorage.setItem('inteligencia', novoValor.toString());
    inteligencia.textContent = novoValor;
}

//BOTÕES INTELIGENCIA
botaoAulaSozinho.addEventListener('click', function () {
    const atributoDeInteligencia = atributoInteligencia['aulaSozinho'];
    const InteligenciaAtual = getInteligencia();
    const novaInteligencia = InteligenciaAtual + atributoDeInteligencia;
    atualizarInteligencia(novaInteligencia);

    // Diminuir o dinheiro
    const valorDeEstudo = custoInteligencia['aulaSozinho'];
    const dinheiroAtual = getDinheiro();
    const novoDinheiro = dinheiroAtual + valorDeEstudo; 
    atualizarDinheiro(novoDinheiro);

    //atualizar idade
    const tempoDeEstudo = tempoEstudo['aulaSozinho'];
    const idadeAtual = getIdade();
    const mesesAtuais = idadeAtual % 12; // Calcula os meses atuais
    const anosAtuais = getAnos();
    
    if (mesesAtuais + tempoDeEstudo >= 12) {
      const novosAnos = anosAtuais + 1;
      const novaIdade = mesesAtuais + tempoDeEstudo - 12;
      atualizarAnos(novosAnos);
      atualizarIdade(novaIdade);
    } else {
      const novaIdade = idadeAtual + tempoDeEstudo;
      atualizarIdade(novaIdade);
    }
});


botaoAulaEscola.addEventListener('click', function () {
    if (localStorage.getItem("dinheiro") >= 500) {
        const atributoDeInteligencia = atributoInteligencia['aulaEscola'];
    const InteligenciaAtual = getInteligencia();
    const novaInteligencia = InteligenciaAtual + atributoDeInteligencia;
    atualizarInteligencia(novaInteligencia);

    // Diminuir o dinheiro
    const valorDeEstudo = custoInteligencia['aulaEscola'];
    const dinheiroAtual = getDinheiro();
    const novoDinheiro = dinheiroAtual + valorDeEstudo; 
    atualizarDinheiro(novoDinheiro);

    //atualizar idade
     const tempoDeEstudo = tempoEstudo['aulaEscola'];
     const idadeAtual = getIdade();
     const mesesAtuais = idadeAtual % 12; // Calcula os meses atuais
     const anosAtuais = getAnos();
     
     if (mesesAtuais + tempoDeEstudo >= 12) {
       const novosAnos = anosAtuais + 1;
       const novaIdade = mesesAtuais + tempoDeEstudo - 12;
       atualizarAnos(novosAnos);
       atualizarIdade(novaIdade);
     } else {
       const novaIdade = idadeAtual + tempoDeEstudo;
       atualizarIdade(novaIdade);
     }

    } else {
        // Caso contrário, exiba um alerta
        alert("Você não possui dinheiro!");
    }
});

botaoAulaParticular.addEventListener('click', function () {
    if (localStorage.getItem("dinheiro") >= 1000) {
        const atributoDeInteligencia = atributoInteligencia['aulaParticular'];
    const InteligenciaAtual = getInteligencia();
    const novaInteligencia = InteligenciaAtual + atributoDeInteligencia;
    atualizarInteligencia(novaInteligencia);

    // Diminuir o dinheiro
    const valorDeEstudo = custoInteligencia['aulaParticular'];
    const dinheiroAtual = getDinheiro();
    const novoDinheiro = dinheiroAtual + valorDeEstudo; // Alterado para adição
    atualizarDinheiro(novoDinheiro);

     //atualizar idade
     const tempoDeEstudo = tempoEstudo['aulaParticular'];
     const idadeAtual = getIdade();
     const mesesAtuais = idadeAtual % 12; // Calcula os meses atuais
     const anosAtuais = getAnos();
     
     if (mesesAtuais + tempoDeEstudo >= 12) {
       const novosAnos = anosAtuais + 1;
       const novaIdade = mesesAtuais + tempoDeEstudo - 12;
       atualizarAnos(novosAnos);
       atualizarIdade(novaIdade);
     } else {
       const novaIdade = idadeAtual + tempoDeEstudo;
       atualizarIdade(novaIdade);
     }

    } else {
        // Caso contrário, exiba um alerta
        alert("Você não possui dinheiro!");
    }
});

// Verifique a inteligência atual e defina-a se for a primeira vez
const InteligenciaAtual = getInteligencia();
if (InteligenciaAtual === 0) {
    localStorage.setItem('inteligencia', '0');
}

// Atualize a inteligência na página de estatísticas
atualizarInteligencia(InteligenciaAtual);

