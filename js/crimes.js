const dinheiroElement = document.getElementById('dinheiro');
const idadeElement = document.getElementById('idade');

const valoresDosCrimes = {
  'none': 0,
  'rua': Math.floor(Math.random() * 50) + 10,
  'conveniencia': Math.floor(Math.random() * 100) + 60,
  'casa': Math.floor(Math.random() * 300) + 110,
  'carro': Math.floor(Math.random() * 600) + 320,
  'superMercado': Math.floor(Math.random()* 1000) + 700,
  'caixa': Math.floor(Math.random() * 1100) + 750,
  'consecionaria': Math.floor(Math.random() * 1500) + 1200,
  'carroForte': Math.floor(Math.random() * 3000) + 2000,
  'joalheria': Math.floor(Math.random() * 5500) + 3500,
  'banco': Math.floor(Math.random() * 10000) + 6000,
};
const tempoCrime ={
  'none': 0,
  'rua': 1,
  'conveniencia': 1,
  'casa': 1,
  'carro': 1,
  'superMercado': 2,
  'caixa': 2,
  'consecionaria': 3,
  'carroForte': 3,
  'joalheria': 4,
  'banco': 6,
}

const dano = {
  'none': 0,
  'rua': Math.floor(Math.random() * 5),
  'conveniencia': Math.floor(Math.random() * 5) + 5,
  'casa': Math.floor(Math.random() * 10) + 5,
  'carro': Math.floor(Math.random() * 15) + 5, 
  'superMercado': Math.floor(Math.random()* 20) + 5,
  'caixa': Math.floor(Math.random() * 25) + 5, 
  'consecionaria': Math.floor(Math.random() * 30) + 5,
  'carroForte': Math.floor(Math.random() * 35) + 5, 
  'joalheria': Math.floor(Math.random() * 40) + 5, 
  'banco': Math.floor(Math.random() * 45) + 5, 
}

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

function getIdade() {
  const idade = localStorage.getItem('idade');
  return idade ? parseInt(idade) : 0;
}

function atualizarIdade(novoValorIdade) {
  localStorage.setItem('idade', novoValorIdade.toString());
  idadeElement.textContent = novoValorIdade;
}

// Adicione eventos de clique para os botões "Cometer crime"
document.querySelector('.crimes form').addEventListener('submit', function (e) {
  e.preventDefault();
  const crimeSelecionado = document.querySelector('#solo').value;
  const valorDoCrime = valoresDosCrimes[crimeSelecionado];
  const dinheiroAtual = getDinheiro();
  const novoDinheiro = dinheiroAtual + valorDoCrime;
  atualizarDinheiro(novoDinheiro);

  //atualizar idade
  const tempoDoCrime = tempoCrime[crimeSelecionado];
  const idadeAtual = getIdade();
  const novaIdade = idadeAtual + tempoDoCrime;
  atualizarIdade(novaIdade);

  //danos
  const danoCausado = dano[crimeSelecionado];
  const vidaAtual = getVida();
  const novaVida = vidaAtual - danoCausado;
  atualizarVida(novaVida);

});

document.querySelector('.crimesGangue form').addEventListener('submit', function (e) {
  e.preventDefault();
  const crimeSelecionado = document.querySelector('#gang').value;
  const valorDoCrime = valoresDosCrimes[crimeSelecionado];
  const dinheiroAtual = getDinheiro();
  const novoDinheiro = dinheiroAtual + valorDoCrime;
  atualizarDinheiro(novoDinheiro);

  //atualizar idade
  const tempoDoCrime = tempoCrime[crimeSelecionado];
  const idadeAtual = getIdade();
  const novaIdade = idadeAtual + tempoDoCrime;
  atualizarIdade(novaIdade);

  //danos
  const danoCausado = dano[crimeSelecionado];
  const vidaAtual = getVida();
  const novaVida = vidaAtual - danoCausado;
  atualizarVida(novaVida);
});

// Verifique se o dinheiro já está armazenado no armazenamento local
const dinheiroAtual = getDinheiro();
if (dinheiroAtual === 0) {
  localStorage.setItem('dinheiro', '0'); // Defina um valor inicial de dinheiro aqui
}

// Atualize o valor do dinheiro na página
atualizarDinheiro(dinheiroAtual);