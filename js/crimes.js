// Adicione um elemento para exibir a quantidade de dinheiro
const dinheiroElement = document.getElementById('dinheiro');

// Mapeie os valores dos crimes para os valores de dinheiro
const valoresDosCrimes = {
  'none': 0, // Valor padrão
  'rua': 100,
  'conveniencia': 200,
  'casa': 300,
  'carro': 400,
  'joalheria': 500,
};

// Adicione eventos de clique para os botões "Cometer crime"
document.querySelector('.crimes form').addEventListener('submit', function (e) {
  e.preventDefault(); // Evita o comportamento padrão do formulário
  const crimeSelecionado = document.querySelector('#solo').value;
  const valorDoCrime = valoresDosCrimes[crimeSelecionado];
  
  // Atualize o valor do dinheiro
  const dinheiroAtual = parseInt(dinheiroElement.textContent);
  const novoDinheiro = dinheiroAtual + valorDoCrime;
  dinheiroElement.textContent = novoDinheiro;
});

document.querySelector('.crimesGangue form').addEventListener('submit', function (e) {
  e.preventDefault(); // Evita o comportamento padrão do formulário
  const crimeSelecionado = document.querySelector('#gang').value;
  const valorDoCrime = valoresDosCrimes[crimeSelecionado];
  
  // Atualize o valor do dinheiro
  const dinheiroAtual = parseInt(dinheiroElement.textContent);
  const novoDinheiro = dinheiroAtual + valorDoCrime;
  dinheiroElement.textContent = novoDinheiro;
});


// Função para obter o valor atual do dinheiro do armazenamento local
function getDinheiro() {
    const dinheiro = localStorage.getItem('dinheiro');
    return dinheiro ? parseInt(dinheiro) : 0;
  }
  
  // Função para atualizar o valor do dinheiro no armazenamento local e na página
  function atualizarDinheiro(novoValor) {
    localStorage.setItem('dinheiro', novoValor.toString());
    const dinheiroElement = document.getElementById('dinheiro');
    dinheiroElement.textContent = novoValor;
  }
  
  // Adicione um evento de carga para atualizar o valor do dinheiro na página
  window.addEventListener('load', function () {
    const dinheiroAtual = getDinheiro();
    atualizarDinheiro(dinheiroAtual);
  });
  
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
  // Quando o usuário comete um crime e ganha dinheiro, atualize o valor do dinheiro na sessão
const dinheiroGanho = " "; // Substitua isso pelo valor real que o usuário ganhou


if (dinheiroAtual) {
  const novoDinheiro = parseInt(dinheiroAtual) + dinheiroGanho;
  sessionStorage.setItem('dinheiro', novoDinheiro.toString());
} else {
  sessionStorage.setItem('dinheiro', dinheiroGanho.toString());
}
const dinheiroAtual = sessionStorage.getItem('dinheiro');
    if (dinheiroAtual) {
      const dinheiroElement = document.getElementById('dinheiro');
      dinheiroElement.textContent = dinheiroAtual;
    }