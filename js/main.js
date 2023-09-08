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



