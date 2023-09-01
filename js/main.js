function transferImage(clickedElement) {
  const sourceImage = clickedElement.querySelector('img');
  const imageUrl = sourceImage.src;

  // Armazenar o URL da imagem no LocalStorage
  localStorage.setItem('selectedImage', imageUrl);
}
const selectedImage = document.getElementById('selectedImage');
const imageUrl = localStorage.getItem('selectedImage');
if (imageUrl) {
  selectedImage.src = imageUrl;
}

