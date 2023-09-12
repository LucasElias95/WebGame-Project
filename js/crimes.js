const dinheiroElement = document.getElementById('dinheiro');
const valoresDosCrimes = {
  'none': 0,
  'rua': Math.floor(Math.random() * 50) + 10,
  'conveniencia': Math.floor(Math.random() * 100) + 60,
  'casa': Math.floor(Math.random() * 300) + 110,
  'carro': Math.floor(Math.random() * 600) + 320,
  'joalheria': Math.floor(Math.random() * 1000) + 700,
  'caixa': Math.floor(Math.random() * 1100) + 750,
  'consecionaria': Math.floor(Math.random() * 1500) + 1200,
  'carroForte': Math.floor(Math.random() * 3000) + 2000,
  'superMercado': Math.floor(Math.random() * 5000) + 2500,
  'banco': Math.floor(Math.random() * 10000) + 6000,
};

// Função para obter o valor atual do dinheiro do armazenamento local
function getDinheiro() {
  const dinheiro = localStorage.getItem('dinheiro');
  return dinheiro ? parseInt(dinheiro) : 0;
}

// Função para atualizar o valor do dinheiro no armazenamento local e na página
function atualizarDinheiro(novoValor) {
  localStorage.setItem('dinheiro', novoValor.toString());
  dinheiroElement.textContent = novoValor;
}

// Adicione eventos de clique para os botões "Cometer crime"
document.querySelector('.crimes form').addEventListener('submit', function (e) {
  e.preventDefault();
  const crimeSelecionado = document.querySelector('#solo').value;
  const valorDoCrime = valoresDosCrimes[crimeSelecionado];
  const dinheiroAtual = getDinheiro();
  const novoDinheiro = dinheiroAtual + valorDoCrime;
  atualizarDinheiro(novoDinheiro);
});

document.querySelector('.crimesGangue form').addEventListener('submit', function (e) {
  e.preventDefault();
  const crimeSelecionado = document.querySelector('#gang').value;
  const valorDoCrime = valoresDosCrimes[crimeSelecionado];
  const dinheiroAtual = getDinheiro();
  const novoDinheiro = dinheiroAtual + valorDoCrime;
  atualizarDinheiro(novoDinheiro);
});

// Verifique se o dinheiro já está armazenado no armazenamento local
const dinheiroAtual = getDinheiro();
if (dinheiroAtual === 0) {
  localStorage.setItem('dinheiro', '0'); // Defina um valor inicial de dinheiro aqui
}

// Atualize o valor do dinheiro na página
atualizarDinheiro(dinheiroAtual);