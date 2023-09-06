
function toggleDescription(element) {
  const descricao = element.querySelector('.discricao');
  descricao.classList.toggle('show-description');
}


function transferImage(imageUrl) {
  localStorage.setItem('selectedImage', imageUrl);
}

const selectedImage = document.getElementById('selectedImage');
const imageUrl = localStorage.getItem('selectedImage');

if (imageUrl) {
  selectedImage.src = imageUrl;
}

