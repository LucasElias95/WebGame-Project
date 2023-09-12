// Selecionando os botões de "ESTUDAR"
const botaoAulaSozinho = document.getElementById('aulaSozinho');
const botaoAulaEscola = document.getElementById('aulaEscola');
const botaoAulaParticular = document.getElementById('aulaParticular');

const inteligencia = document.getElementById('inteligencia');

const valoresInteligencia = {
    'aulaSozinho': 1,
    'aulaEscola': 5,
    'aulaParticular': 10,
};

const custoInteligencia = {
    'aulaSozinho': 0,
    'aulaEscola': 500,
    'aulaParticular': 1000,
}

function getInteligencia() {
    const int = localStorage.getItem('inteligencia');
    return int ? parseInt(int) : 0;
}

function atualizarInteligencia(novoValor) {
    localStorage.setItem('inteligencia', novoValor.toString());
    inteligencia.textContent = novoValor;
}


function atualizarDinheiro(novoValor) {
    localStorage.setItem('dinheiro', novoValor.toString());
    const dinheiroElement = document.getElementById('dinheiro');
    dinheiroElement.textContent = novoValor;
}

// Adicionando event listeners aos botões de "ESTUDAR"
botaoAulaSozinho.addEventListener('click', function () {
    const valorDeInteligencia = valoresInteligencia['aulaSozinho'];
    const InteligenciaAtual = getInteligencia();
    const novaInteligencia = InteligenciaAtual + valorDeInteligencia;
    atualizarInteligencia(novaInteligencia);

    // Diminuir o dinheiro
    const valorDeEstudo = custoInteligencia['aulaSozinho'];
    const dinheiroAtual = getDinheiro();
    const novoDinheiro = dinheiroAtual - valorDeEstudo;
    atualizarDinheiro(novoDinheiro);
});

botaoAulaEscola.addEventListener('click', function () {
    if (localStorage.getItem("dinheiro") >= 500) {
        const valorDeInteligencia = valoresInteligencia['aulaEscola'];
        const InteligenciaAtual = getInteligencia();
        const novaInteligencia = InteligenciaAtual + valorDeInteligencia;
        atualizarInteligencia(novaInteligencia);

        // Diminuir o dinheiro
        const valorDeEstudo = custoInteligencia['aulaEscola'];
        const dinheiroAtual = getDinheiro();
        const novoDinheiro = dinheiroAtual - valorDeEstudo;
        atualizarDinheiro(novoDinheiro);
    } else {
        // Caso contrário, exiba um alerta
        alert("Você não possui dinheiro!");
    }
});

botaoAulaParticular.addEventListener('click', function () {
    if (localStorage.getItem("dinheiro") >= 1000) {
        const valorDeInteligencia = valoresInteligencia['aulaParticular'];
        const InteligenciaAtual = getInteligencia();
        const novaInteligencia = InteligenciaAtual + valorDeInteligencia;
        atualizarInteligencia(novaInteligencia);

        // Diminuir o dinheiro
        const valorDeEstudo = custoInteligencia['aulaParticular'];
        const dinheiroAtual = getDinheiro();
        const novoDinheiro = dinheiroAtual - valorDeEstudo;
        atualizarDinheiro(novoDinheiro);
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



  

