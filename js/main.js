//seleção de personagem
const imageUrl = localStorage.getItem('selectedImage');
const selectedImage = document.getElementById('selectedImage');
const selectedPersonagem = JSON.parse(localStorage.getItem('selectedPersonagem'));

const personagens = {
  jason: {
    anos: 25,
    força: 0,
    inteligencia: 20,
    poderFogo: 0,
    dinheiro: 1000,
  },

  nicolai: {
    anos: 40,
    força: 10,
    inteligencia: 20,
    poderFogo: 20,
    dinheiro: 500,
  },
  morales: {
    anos: 30,
    força: 25,
    inteligencia: 5,
    poderFogo: 0,
    dinheiro: 300,
  },
 
  jamal: {
    anos: 18,
    força: 5,
    inteligencia: 0,
    poderFogo: 5,
    dinheiro: 0,
  },
};

//-----------------------DINHEIRO------------------------------------
// Função para obter o valor atual do dinheiro do armazenamento local
function getDinheiro() {
  const dinheiro = localStorage.getItem('dinheiro') ;
  return dinheiro ? parseInt(dinheiro) : selectedPersonagem.dinheiro;
}

function atualizarDinheiroo(novoValor) {
  localStorage.setItem('dinheiro', novoValor.toString());
  const dinheiroElement = document.getElementById('dinheiro');
  dinheiroElement.textContent = novoValor;
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
const inteligencia = localStorage.getItem('inteligencia') 
return inteligencia ? parseInt(inteligencia) : selectedPersonagem.inteligencia;
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
return str ? parseInt(str) : selectedPersonagem.força;
}
// Função para atualizar o valor da força na página e no armazenamento local
function atualizarForca(novoValor) {
localStorage.setItem('força', novoValor.toString());
const forcaElement = document.getElementById('força');
forcaElement.textContent = novoValor;
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

//-----------------------PODER DE FOGO------------------------------------

// Função para obter o valor atual do poder de fogo do armazenamento local
function getPoderFogo() {
const fogo = localStorage.getItem('poderFogo');
return fogo ? parseInt(fogo) : selectedPersonagem.poderFogo;
}
// Função para atualizar o valor de poder de fogo na página e no armazenamento local
function atualizarFire(novoValor) {
localStorage.setItem('poderFogo', novoValor.toString());
const Fire = document.getElementById('poderFogo');
Fire.textContent = novoValor;
}

//-----------------------IDADE-------------------------------------------
// Função para obter o valor atual da idade do armazenamento local
function getIdade() {
const idade = localStorage.getItem('idade');
return idade ? parseInt(idade) : selectedPersonagem.anos;
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
/*function atualizarAnos(novoAno) {
  localStorage.setItem('anos', novoAno.toString());
  const anosElement = document.getElementById('anosDisplay');
  anosElement.textContent = novoAno;

  // Verificar se o jogador se aposentou
  if (novoAno > 69) {
    window.location.href = "aposentou.html";
  }
}*/


//Para transformar mesês em anos-----------------------------------------------------
function getIdade() {
  const idade = localStorage.getItem('idade');
  return idade ? parseInt(idade) : 0;
}

function atualizarIdade(novoValorIdade) {
  localStorage.setItem('idade', novoValorIdade.toString());
  idadeElement.textContent = novoValorIdade;
}

function getAnos() {
  const anos = localStorage.getItem('anos');
  return anos ? parseInt(anos) : 0;
}

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

  function atualizarAnos(novoAno) {
    localStorage.setItem('anos', novoAno.toString());
    const anosElement = document.getElementById('anosDisplay');
    anosElement.textContent = novoAno;
  
    // Verificar se o jogador se aposentou
    if (novoAno > 69) {
      window.location.href = "aposentou.html";
    }
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

//---------------------Mercenarios-----------------------------------
// Função para obter o valor atual da força do armazenamento local
function getMercenarios() {
  const mercenarios = localStorage.getItem('mercenarios');
  return mercenarios ? parseInt(mercenarios) : 0;
}


// Função para atualizar o valor de mercenários na página e no armazenamento local
function atualizarMercenarios(novoValor) {
  localStorage.setItem('mercenarios', novoValor.toString());
  const mercenariosElement = document.getElementById('mercenarios'); // Adicione essa linha para obter a referência correta ao elemento HTML
  mercenariosElement.textContent = novoValor;
}





function getPoderM(){
  const poderM = localStorage.getItem('poderM');
  return poderM ? parseInt(poderM): 0;
}
  function atualizarPoderM(novoValor) {
    localStorage.setItem('poderM', novoValor.toString());
    poderMElement.textContent = novoValor;
    
  }


//-----------------index seleção de personagem------------------------
function novoJogo(personagem) {
  localStorage.clear();

  // Obtenha o objeto do personagem selecionado
  const selectedPersonagem = personagens[personagem];

  // Salve o objeto atualizado de volta no localStorage
  localStorage.setItem('selectedPersonagem', JSON.stringify(selectedPersonagem));

  // Salvar a imagem do personagem
  localStorage.setItem('selectedImage', document.getElementById(personagem).querySelector('img').src);

  // Você pode chamar as funções de atualização aqui para definir os valores corretos no localStorage
  atualizarAnos(selectedPersonagem.anos);
  atualizarForca(selectedPersonagem.força);
  atualizarFire(selectedPersonagem.poderFogo);
  atualizarInteligencia(selectedPersonagem.inteligencia);
  atualizarDinheiro(selectedPersonagem.dinheiro);
  
}

  

//------------------------------------------------

function toggleDescription(element) {
  const descricao = element.querySelector('.discricao');
  descricao.classList.toggle('show-description');
}

function transferImage(imageUrl) {
  localStorage.setItem('selectedImage', imageUrl);
}

if (imageUrl) {
  selectedImage.src = imageUrl;
}

function carregarJogo() {
  // Verifique se há algum valor no Local Storage
  if (localStorage.getItem("selectedImage") !== null) {
    // Se houver um valor, redirecione para a página estatisticas.html
    window.location.href = "estatisticas.html";
  } else {
    // Caso contrário, exiba um alerta
    alert("Você não possui jogo salvo, para carregar um jogo é necessário começar um antes!");
  }
}


//-----------------------ATUALIZAR------------------------------------
window.addEventListener('load', function () {
  
  atualizarDinheiroNaPagina();
  atualizarIdadeNaPagina();
  atualizarAnosNaPagina();
  atualizarVidaNaPagina();
  atualizarResistencia(getResistencia());
  atualizarInteligencia(getInteligencia()); // Passa o valor da inteligência do armazenamento local
  atualizarForca(getForca()); // Passa o valor da força do armazenamento local
  atualizarFire(getPoderFogo()); // Passa o valor da força do armazenamento local
  atualizarDinheiro(getDinheiro());
  atualizarMercenarios(getMercenarios());
  atualizarPoderM(getPoderM());
  fimDeJogo();
  });
  