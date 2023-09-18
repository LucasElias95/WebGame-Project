const imageUrl = localStorage.getItem('selectedImage');
const selectedImage = document.getElementById('selectedImage');


function toggleDescription(element) {
  const descricao = element.querySelector('.discricao');
  descricao.classList.toggle('show-description');
}

function novoJogo (){
  localStorage.clear();
  
}

function transferImage(imageUrl) {
  localStorage.setItem('selectedImage', imageUrl);
}

if (imageUrl) {
  selectedImage.src = imageUrl;
}

// Função para verificar se um item já foi comprado
function itemJaComprado(item) {
  const itensComprados = JSON.parse(localStorage.getItem('itensComprados')) || [];
  return itensComprados.includes(item);
}

// Função para marcar um item como comprado
function marcarItemComoComprado(item) {
  const itensComprados = JSON.parse(localStorage.getItem('itensComprados')) || [];
  itensComprados.push(item);
  localStorage.setItem('itensComprados', JSON.stringify(itensComprados));
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