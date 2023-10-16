const botaoChico = document.getElementById('chico');
const botaoTonhao = document.getElementById('tonhao');
const botaoBoca = document.getElementById('boca');
const botaoZe = document.getElementById('ze');
const botaoPablo = document.getElementById('pablo');
const botaoPedro = document.getElementById('pedro');
const botaoChrissi = document.getElementById('chrissi');
const botaoPaulo = document.getElementById('paulo');
const botaoAnderson = document.getElementById('anderson');

const textoLutasChico = document.getElementById('chicoLutas');
const textoLutasTonhao = document.getElementById('tonhaoLutas');
const textoLutasBoca = document.getElementById('bocaLutas');
const textoLutasZe = document.getElementById('zeLutas');
const textoLutasPablo = document.getElementById('pabloLutas');
const textoLutasPedro = document.getElementById('pedroLutas');
const textoLutasChrissi = document.getElementById('chrissiLutas');
const textoLutasPaulo = document.getElementById('pauloLutas');
const textoLutasAnderson = document.getElementById('andersonLutas');

let lutaVencidaChico = localStorage.getItem('chicoLutaVencida');
let lutaVencidaTonhao = localStorage.getItem('tonhaoLutaVencida');
let lutaVencidaBoca = localStorage.getItem('bocaLutaVencida');
let lutaVencidaZe = localStorage.getItem('zeLutaVencida');
let lutaVencidaPablo = localStorage.getItem('pabloLutaVencida');
let lutaVencidaPedro = localStorage.getItem('pedroLutaVencida');
let lutaVencidaChrissi = localStorage.getItem('chrissiLutaVencida');
let lutaVencidaPaulo = localStorage.getItem('pauloLutaVencida');
let lutaVencidaAnderson = localStorage.getItem('andersonLutaVencida');

if (lutaVencidaChico === 'true') {
    botaoChico.disabled = true;
    textoLutasChico.innerHTML = 'Vencido';
    textoLutasChico.style.color = 'green';
}
if (lutaVencidaTonhao === 'true') {
    botaoTonhao.disabled = true;
    textoLutasTonhao.innerHTML = 'Vencido';
    textoLutasTonhao.style.color = 'green';
}
if (lutaVencidaBoca === 'true') {
    botaoBoca.disabled = true;
    textoLutasBoca.innerHTML = 'Vencido';
    textoLutasBoca.style.color = 'green';
}
if (lutaVencidaZe === 'true') {
    botaoZe.disabled = true;
    textoLutasZe.innerHTML = 'Vencido';
    textoLutasZe.style.color = 'green';
}
if (lutaVencidaPablo === 'true') {
    botaoPablo.disabled = true;
    textoLutasPablo.innerHTML = 'Vencido';
    textoLutasPablo.style.color = 'green';
}
if (lutaVencidaPedro === 'true') {
    botaoPedro.disabled = true;
    textoLutasPedro.innerHTML = 'Vencido';
    textoLutasPedro.style.color = 'green';
}
if (lutaVencidaChrissi === 'true') {
    botaoChrissi.disabled = true;
    textoLutasChrissi.innerHTML = 'Vencido';
    textoLutasChrissi.style.color = 'green';
}
if (lutaVencidaPaulo === 'true') {
    botaoPaulo.disabled = true;
    textoLutasPaulo.innerHTML = 'Vencido';
    textoLutasPaulo.style.color = 'green';
}
if (lutaVencidaAnderson === 'true') {
    botaoAnderson.disabled = true;
    textoLutasAnderson.innerHTML = 'Vencido';
    textoLutasAnderson.style.color = 'green';
}

const dificuldade = {
    'chico': 8,
    'tonhao': 15,
    'boca': 25,
    'ze': 50,
    'pablo': 75,
    'pedro': 130,
    'chrissi': 160,
    'paulo': 190,
    'anderson': 250,
}

const premio = {
    'chico': 200,
    'tonhao': 350,
    'boca': 600,
    'ze': 1000,
    'pablo': 3000,
    'pedro': 5000,
    'chrissi': 8000,
    'paulo': 10000,
    'anderson': 15000,
}

const dano = {
    'chico': Math.floor(Math.random() * 4) + 1,
    'tonhao': Math.floor(Math.random() * 3) + 4,
    'boca': Math.floor(Math.random() * 3) + 7,
    'ze': Math.floor(Math.random() * 5) + 10,
    'pablo': Math.floor(Math.random() * 5) + 13,
    'pedro': Math.floor(Math.random() * 5) + 20,
    'chrissi': Math.floor(Math.random() * 10) + 30,
    'paulo': Math.floor(Math.random() * 20) + 40,
    'anderson': Math.floor(Math.random() * 30) + 50,
}

function poderLuta() {
    const forca = getForca();
    const inteligencia = getInteligencia()

    return (forca*1.2) + (inteligencia * 0.4)
}

botaoChico.addEventListener('click', function () {
    if (!lutaVencidaChico) { // Verifica se a luta ainda não foi vencida para Chico
        const adversario = dificuldade['chico'];
        const poderDeLuta = poderLuta();

        if (poderDeLuta > adversario) {
            const valorDoPremio = premio['chico'];
            const dinheiroAtual = getDinheiro();
            const novoDinheiro = dinheiroAtual + valorDoPremio;
            atualizarDinheiro(novoDinheiro);

            const danoSofrido = dano['chico'];
            const vida = getVida();
            const novaVida = vida - danoSofrido;
            atualizarVida(novaVida);

            textoLutasChico.innerHTML = 'Vencido';
            textoLutasChico.style.color = 'green';
            botaoChico.disabled = true;
            lutaVencidaChico = true;
            localStorage.setItem('chicoLutaVencida', 'true');
        } else {
            const danoSofrido = dano['chico'];
            const vida = getVida();
            const novaVida = vida - danoSofrido;
            atualizarVida(novaVida);
            textoLutasChico.innerHTML = 'Chico Pinguço era mais forte que você, seu lixo';
            textoLutasChico.style.color = 'red';
        }
    }
})

botaoTonhao.addEventListener('click', function () {
    if (!lutaVencidaTonhao) { // Verifica se a luta ainda não foi vencida
        const adversario = dificuldade['tonhao'];
        const poderDeLuta = poderLuta();

        if (poderDeLuta > adversario) {
            const valorDoPremio = premio['tonhao'];
            const dinheiroAtual = getDinheiro();
            const novoDinheiro = dinheiroAtual + valorDoPremio;
            atualizarDinheiro(novoDinheiro);

            const danoSofrido = dano['tonhao'];
            const vida = getVida();
            const novaVida = vida - danoSofrido;
            atualizarVida(novaVida);

            textoLutasTonhao.innerHTML = 'Vencido';
            textoLutasTonhao.style.color = 'green';
            botaoTonhao.disabled = true; // Desativa o botão após a luta vencida
            lutaVencidaTonhao = true; // Marca a luta como vencida
            localStorage.setItem('tonhaoLutaVencida', 'true');

        
        } else {
            const danoSofrido = dano['tonhao'];
            const vida = getVida();
            const novaVida = vida - danoSofrido;
            atualizarVida(novaVida);
            textoLutasTonhao.innerHTML = 'Tonhão do caminhão passou o caminhão em você';
            textoLutasTonhao.style.color = 'red';
        }
    }
})


botaoBoca.addEventListener('click', function () {
    if (!lutaVencidaBoca) { // Verifica se a luta ainda não foi vencida para Boca
        const adversario = dificuldade['boca'];
        const poderDeLuta = poderLuta();

        if (poderDeLuta > adversario) {
            const valorDoPremio = premio['boca'];
            const dinheiroAtual = getDinheiro();
            const novoDinheiro = dinheiroAtual + valorDoPremio;
            atualizarDinheiro(novoDinheiro);

            const danoSofrido = dano['boca'];
            const vida = getVida();
            const novaVida = vida - danoSofrido;
            atualizarVida(novaVida);

            textoLutasBoca.innerHTML = 'Vencido';
            textoLutasBoca.style.color = 'green';
            botaoBoca.disabled = true;
            lutaVencidaBoca = true;
            localStorage.setItem('bocaLutaVencida', 'true');
        } else {
            const danoSofrido = dano['boca'];
            const vida = getVida();
            const novaVida = vida - danoSofrido;
            atualizarVida(novaVida);
            textoLutasBoca.innerHTML = 'O famoso boca de caçapa faz mais uma vítima';
            textoLutasBoca.style.color = 'red';
        }
    }
})

botaoZe.addEventListener('click', function () {
    if (!lutaVencidaZe) { 
        const adversario = dificuldade['ze'];
        const poderDeLuta = poderLuta();

        if (poderDeLuta > adversario) {
            const valorDoPremio = premio['ze'];
            const dinheiroAtual = getDinheiro();
            const novoDinheiro = dinheiroAtual + valorDoPremio;
            atualizarDinheiro(novoDinheiro);

            const danoSofrido = dano['ze'];
            const vida = getVida();
            const novaVida = vida - danoSofrido;
            atualizarVida(novaVida);

            textoLutasZe.innerHTML = 'Vencido';
            textoLutasZe.style.color = 'green';
            botaoZe.disabled = true;
            lutaVencidaZe = true;
            localStorage.setItem('zeLutaVencida', 'true');

        } else {
            const danoSofrido = dano['ze'];
            const vida = getVida();
            const novaVida = vida - danoSofrido;
            atualizarVida(novaVida);
            textoLutasZe.innerHTML = 'Me chame de Zé da Manga';
            textoLutasZe.style.color = 'red';
        }
    }
})

botaoPablo.addEventListener('click', function () {
    if (!lutaVencidaPablo) { 
        const adversario = dificuldade['pablo'];
        const poderDeLuta = poderLuta();

        if (poderDeLuta > adversario) {
            const valorDoPremio = premio['pablo'];
            const dinheiroAtual = getDinheiro();
            const novoDinheiro = dinheiroAtual + valorDoPremio;
            atualizarDinheiro(novoDinheiro);

            const danoSofrido = dano['pablo'];
            const vida = getVida();
            const novaVida = vida - danoSofrido;
            atualizarVida(novaVida);

            textoLutasPablo.innerHTML = 'Vencido';
            textoLutasPablo.style.color = 'green';
            botaoPablo.disabled = true;
            lutaVencidaPablo = true;
            localStorage.setItem('pabloLutaVencida', 'true');
        } else {
            const danoSofrido = dano['pablo'];
            const vida = getVida();
            const novaVida = vida - danoSofrido;
            atualizarVida(novaVida);
            textoLutasPablo.innerHTML = 'Pablo te reduziu a pó';
            textoLutasPablo.style.color = 'red';
        }
    }
})

botaoPedro.addEventListener('click', function () {
    if (!lutaVencidaPedro) { 
        const adversario = dificuldade['pedro'];
        const poderDeLuta = poderLuta();

        if (poderDeLuta > adversario) {
            const valorDoPremio = premio['pedro'];
            const dinheiroAtual = getDinheiro();
            const novoDinheiro = dinheiroAtual + valorDoPremio;
            atualizarDinheiro(novoDinheiro);

            const danoSofrido = dano['pedro'];
            const vida = getVida();
            const novaVida = vida - danoSofrido;
            atualizarVida(novaVida);

            textoLutasPedro.innerHTML = 'Vencido';
            textoLutasPedro.style.color = 'green';
            botaoPedro.disabled = true;
            lutaVencidaPedro = true;
            localStorage.setItem('pedroLutaVencida', 'true');

        } else {
            const danoSofrido = dano['pedro'];
            const vida = getVida();
            const novaVida = vida - danoSofrido;
            atualizarVida(novaVida);
            textoLutasPedro.innerHTML = 'Pedro fez picadinho de você';
            textoLutasPedro.style.color = 'red';
        }
    }
})

botaoChrissi.addEventListener('click', function () {
    if (!lutaVencidaChrissi) { 
        const adversario = dificuldade['chrissi'];
        const poderDeLuta = poderLuta();

        if (poderDeLuta > adversario) {
            const valorDoPremio = premio['chrissi'];
            const dinheiroAtual = getDinheiro();
            const novoDinheiro = dinheiroAtual + valorDoPremio;
            atualizarDinheiro(novoDinheiro);

            const danoSofrido = dano['chrissi'];
            const vida = getVida();
            const novaVida = vida - danoSofrido;
            atualizarVida(novaVida);

            textoLutasChrissi.innerHTML = 'Vencido';
            textoLutasChrissi.style.color = 'green';
            botaoChrissi.disabled = true;
            lutaVencidaChrissi = true;
            localStorage.setItem('chrissiLutaVencida', 'true');

        } else {
            const danoSofrido = dano['chrissi'];
            const vida = getVida();
            const novaVida = vida - danoSofrido;
            atualizarVida(novaVida);
            textoLutasChrissi.innerHTML = 'Chrissi te deu um cruzado que lhe derrubou como um tiro certeiro';
            textoLutasChrissi.style.color = 'red';
        }
    }
})

botaoPaulo.addEventListener('click', function () {
    if (!lutaVencidaPaulo) { 
        const adversario = dificuldade['paulo'];
        const poderDeLuta = poderLuta();

        if (poderDeLuta > adversario) {
            const valorDoPremio = premio['paulo'];
            const dinheiroAtual = getDinheiro();
            const novoDinheiro = dinheiroAtual + valorDoPremio;
            atualizarDinheiro(novoDinheiro);

            const danoSofrido = dano['paulo'];
            const vida = getVida();
            const novaVida = vida - danoSofrido;
            atualizarVida(novaVida);

            textoLutasPaulo.innerHTML = 'Vencido';
            textoLutasPaulo.style.color = 'green';
            botaoPaulo.disabled = true;
            lutaVencidaPaulo = true;
            localStorage.setItem('pauloLutaVencida', 'true');

        } else {
            const danoSofrido = dano['paulo'];
            const vida = getVida();
            const novaVida = vida - danoSofrido;
            atualizarVida(novaVida);
            textoLutasPaulo.innerHTML = 'Não vou nem te dizer onde o Paulo colocou a calabresa';
            textoLutasPaulo.style.color = 'red';
        }
    }
})

botaoAnderson.addEventListener('click', function () {
    if (!lutaVencidaAnderson) { 
        const adversario = dificuldade['anderson'];
        const poderDeLuta = poderLuta();

        if (poderDeLuta > adversario) {
            const valorDoPremio = premio['anderson'];
            const dinheiroAtual = getDinheiro();
            const novoDinheiro = dinheiroAtual + valorDoPremio;
            atualizarDinheiro(novoDinheiro);

            const danoSofrido = dano['anderson'];
            const vida = getVida();
            const novaVida = vida - danoSofrido;
            atualizarVida(novaVida);

            textoLutasAnderson.innerHTML = 'Vencido';
            textoLutasAnderson.style.color = 'green';
            botaoAnderson.disabled = true;
            lutaVencidaAnderson = true;
            localStorage.setItem('andersonLutaVencida', 'true');

        } else {
            const danoSofrido = dano['paulo'];
            const vida = getVida();
            const novaVida = vida - danoSofrido;
            atualizarVida(novaVida);
            textoLutasAnderson.innerHTML = 'Parece que essa perna era mais dura do que o que você imaginava, não subestime um campeão';
            textoLutasAnderson.style.color = 'red';
        }
    }
});