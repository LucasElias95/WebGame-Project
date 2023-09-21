//seleção de personagem
const imageUrl = localStorage.getItem('selectedImage');
const selectedImage = document.getElementById('selectedImage');
const personagens = {
  nicolai: {
    "anos": 40,
    "força": 10,
    "inteligencia": 20,
    "poderDeFogo": 20,
  },
  morales: {
    "anos": 30,
    "força": 25,
    "inteligencia": 5,
    "Dinheiro": 500,
  },
  jason: {
    "anos": 25,
    "força": 0,
    "inteligencia": 20,
    "dinheiro": 1000,
  },
  jamal: {
    "anos": 18,
    "força": 5,
    "inteligencia": 0,
    "poderDeFogo": 5,
  },
};
const selectedPersonagem = JSON.parse(localStorage.getItem('selectedPersonagem'));

function novoJogo(personagem, anos, forca, inteligencia, poderFogo) {
  localStorage.clear();
  localStorage.setItem('selectedPersonagem', JSON.stringify({
    personagem: personagem,
    anos: parseInt(anos),
    forca: parseInt(forca),
    inteligencia: parseInt(inteligencia),
    poderFogo: parseInt(poderFogo),
  }));
     // Salvar a imagem do personagem
     localStorage.setItem('selectedImage', document.getElementById(personagem).querySelector('img').src);
    
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


