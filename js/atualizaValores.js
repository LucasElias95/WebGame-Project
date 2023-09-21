//-----------------------DINHEIRO------------------------------------
// Função para obter o valor atual do dinheiro do armazenamento local
function getDinheiro() {
  const dinheiro = localStorage.getItem('dinheiro');
  return dinheiro ? parseInt(dinheiro) : 0;
}


function atualizarDinheiro(novoValor) {
  localStorage.setItem('dinheiro', novoValor.toString());
  const dinheiroElement = document.getElementById('dinheiroDisplay'); 
  dinheiroElement.textContent = novoValor;
}

// Função para atualizar o valor do dinheiro na página
function atualizarDinheiroNaPagina() {
const dinheiroAtual = getDinheiro();
const dinheiroElement = document.getElementById('dinheiroDisplay');
dinheiroElement.textContent = dinheiroAtual;
}


//-----------------------INTELIGENCIA------------------------------------
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

//-----------------------FORÇA------------------------------------
// Função para obter o valor atual do forca do armazenamento local
function getForca() {
const str = localStorage.getItem('força');
return str ? parseInt(str) : 0;
}
// Função para atualizar o valor da força na página e no armazenamento local
function atualizarForca(novoValor) {
localStorage.setItem('força', novoValor.toString());
const forcaElement = document.getElementById('força');
forcaElement.textContent = novoValor;
}

//-----------------------PODER DE FOGO------------------------------------

// Função para obter o valor atual do poder de fogo do armazenamento local
function getPoderFogo() {
const fogo = localStorage.getItem('poderFogo');
return fogo ? parseInt(fogo) : 0;
}
// Função para atualizar o valor de poder de fogo na página e no armazenamento local
function atualizarFire(novoValor) {
localStorage.setItem('poderFogo', novoValor.toString());
const Fire = document.getElementById('poderFogo');
Fire.textContent = novoValor;
}
//-----------------------RESISTENCIA------------------------------------

// Função para obter o valor atual do poder de fogo do armazenamento local
function getResistencia() {
    const resist = localStorage.getItem('resistencia');
    return resist ? parseInt(resist) : 0;
}
  // Função para atualizar o valor de poder de fogo na página e no armazenamento local
  function atualizarResistencia(novoValor) {
  localStorage.setItem('resistencia', novoValor.toString());
  const resistencia = document.getElementById('resistencia');
  resistencia.textContent = novoValor;
  }
//-----------------------IDADE-------------------------------------------
// Função para obter o valor atual da idade do armazenamento local
function getIdade() {
const idade = localStorage.getItem('idade');
return idade ? parseInt(idade) : 0;
}

// Função para atualizar o valor de idade na página e no armazenamento local
function atualizarAnos(novoAno) {
  localStorage.setItem('anos', novoAno.toString());
  const anosElement = document.getElementById('anosDisplay');
  anosElement.textContent = novoAno;
}

function atualizarIdade(novaIdade) {
  localStorage.setItem('idade', novaIdade.toString());
  const idadeElement = document.getElementById('idadeDisplay');
  idadeElement.textContent = novaIdade;
}
function atualizarAnos(novoAno) {
  localStorage.setItem('anos', novoAno.toString());
  const anosElement = document.getElementById('anosDisplay');
  anosElement.textContent = novoAno;

  // Verificar se o jogador se aposentou
  if (novoAno > 69) {
    window.location.href = "aposentou.html";
  }
}

// Função para atualizar o valor do idade na página
function atualizarIdadeNaPagina() {
const idadeAtual = getIdade();
const idadeElement = document.getElementById('idadeDisplay');
idadeElement.textContent = idadeAtual;
}
function atualizarAnosNaPagina() {
  const anosAtual = getAnos();
  const anosElement = document.getElementById('anosDisplay');
  anosElement.textContent = anosAtual;
  }

//-----------------------VIDA------------------------------------
function getVida() {
const vida = localStorage.getItem('vida');
return vida ? parseInt(vida) : 100;
}

function atualizarVida(novaVida) {
if (novaVida > 100) {
  novaVida = 100;
}

if (novaVida <= 0) {
  window.location.href = "morreu.html";
  return;
}

localStorage.setItem('vida', novaVida.toString());
const vidaElement = document.getElementById('vidaDisplay');
vidaElement.textContent = novaVida;
}

// Função para atualizar o valor de vida na página
function atualizarVidaNaPagina() {
const vidaAtual = getVida();
const vidaElement = document.getElementById('vidaDisplay');
vidaElement.textContent = vidaAtual;
}


//-----------------------ATUALIZAR------------------------------------
window.addEventListener('load', function () {
atualizarVidaNaPagina();
atualizarDinheiroNaPagina();
atualizarIdadeNaPagina();
atualizarAnosNaPagina();
atualizarInteligencia(getInteligencia()); // Passa o valor da inteligência do armazenamento local
atualizarForca(getForca()); // Passa o valor da força do armazenamento local
atualizarFire(getPoderFogo()); // Passa o valor da força do armazenamento local
atualizarResistencia(getResistencia());
});


