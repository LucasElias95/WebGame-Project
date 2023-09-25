const dinheiroElement = document.getElementById('dinheiro');
const idadeElement = document.getElementById('idade');
const anosElement = document.getElementById('anos')

const valoresDosCrimes = {
  'none': 0,
  'rua': Math.floor(Math.random() * 50) + 10,
  'casa': Math.floor(Math.random() * 100) + 60,
  'conveniencia': Math.floor(Math.random() * 300) + 110,
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
  'rua': Math.floor(Math.random() * 4) + 1,
  'casa': Math.floor(Math.random() * 5) + 3,
  'conveniencia': Math.floor(Math.random() * 10) + 5,
  'carro': Math.floor(Math.random() * 15) + 7, 
  'superMercado': Math.floor(Math.random()* 20) + 9,
  'caixa': Math.floor(Math.random() * 25) + 10, 
  'consecionaria': Math.floor(Math.random() * 30) + 10,
  'carroForte': Math.floor(Math.random() * 35) + 10, 
  'joalheria': Math.floor(Math.random() * 40) + 20, 
  'banco': Math.floor(Math.random() * 45) + 20, 
}

function atendeRequisitosArma(crimeSelecionado) {
  // Defina os requisitos mínimos para cada tipo de crime
  const requisitosArmas = {
    'none': { poderDeFogo: 0 },
    'rua': { poderDeFogo: 1 },
    'casa': { poderDeFogo: 3 },
    'conveniencia':{ poderDeFogo: 5},
    'carro':{ poderDeFogo: 10},
    'superMercado':{ poderDeFogo: 20},
    'caixa': { poderDeFogo: 30},
    'consecionaria': { poderDeFogo: 70},
    'carroForte': { poderDeFogo: 140},
    'joalheria':  { poderDeFogo: 600},
    'banco':  { poderDeFogo: 1000},
   
  }};
  function atendeRequisitosEquipamento(crimeSelecionado) {
    // Defina os requisitos mínimos para cada tipo de crime
    const atendeRequisitosEquipamento = {
   
      'carroForte': { resistencia: 30},
      'joalheria':  { resistencia: 50},
      'banco':  { resistencia: 80},
     
    }};

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

function getReistencia() {
  const resist = localStorage.getItem('resistencia');
  return resist ? parseInt(resist) : 0;
}

function atualizarResistencia(novoValor) {
  localStorage.setItem('resistencia', novoValor.toString());
  equip.textContent = novoValor;
}

function getVida() {
  const vida = localStorage.getItem('vida');
  return vida ? parseInt(vida) : 100;
  }


// Adicione eventos de clique para os botões "Cometer crime"
document.querySelector('.crimes form').addEventListener('submit', function (e) {
  e.preventDefault();
  const crimeSelecionado = document.querySelector('#solo').value;

  /*if ((crimeSelecionado)> atendeRequisitosArma && atendeRequisitosEquipamento) {
    alert('Você não possui os requisitos mínimos para cometer este crime.');
    return;
  */

  const valorDoCrime = valoresDosCrimes[crimeSelecionado];
  const dinheiroAtual = getDinheiro();
  const novoDinheiro = dinheiroAtual + valorDoCrime;
  atualizarDinheiro(novoDinheiro);

  //atualizar idade
const tempoDoCrime = tempoCrime[crimeSelecionado];
const idadeAtual = getIdade();
const mesesAtuais = idadeAtual % 12; // Calcula os meses atuais
const anosAtuais = getAnos();

if (mesesAtuais + tempoDoCrime >= 12) {
  const novosAnos = anosAtuais + 1;
  const novaIdade = mesesAtuais + tempoDoCrime - 12;
  atualizarAnos(novosAnos);
  atualizarIdade(novaIdade);
} else {
  const novaIdade = idadeAtual + tempoDoCrime;
  atualizarIdade(novaIdade);
}

 //danos
 const danoCausado = dano[crimeSelecionado];
 const resistenciaAtual = getResistencia();
 const vidaAtual = getVida();
 
 let novaResistencia = resistenciaAtual; // Inicialize com o valor atual
 let novaVida = vidaAtual; // Inicialize com o valor atual
 
 if (danoCausado <= resistenciaAtual) {
   // Se o dano for menor ou igual à resistência, a resistência absorve todo o dano.
   novaResistencia = resistenciaAtual - danoCausado;
 } else {
   // Se o dano for maior que a resistência, a resistência é zerada e o excesso de dano é subtraído da vida.
   novaResistencia = 0;
   novaVida = vidaAtual - (danoCausado - resistenciaAtual);
 }
 
 atualizarVida(novaVida);
 atualizarResistencia(novaResistencia);
 
 });
 

document.querySelector('.crimesGangue form').addEventListener('submit', function (e) {
  e.preventDefault();
  const crimeSelecionado = document.querySelector('#gang').value;
  const valorDoCrime = valoresDosCrimes[crimeSelecionado];
  const dinheiroAtual = getDinheiro();
  const novoDinheiro = dinheiroAtual + valorDoCrime;
  atualizarDinheiro(novoDinheiro);

   // Atualizar idade
 const tempoDoCrime = tempoCrime[crimeSelecionado];
 const idadeAtual = getIdade();
 const mesesAtuais = idadeAtual % 12; // Calcula os meses atuais
 const anosAtuais = getAnos();
 
 if (mesesAtuais + tempoDoCrime >= 12) {
   const novosAnos = anosAtuais + 1;
   const novaIdade = mesesAtuais + tempoDoCrime - 12;
   atualizarAnos(novosAnos);
   atualizarIdade(novaIdade);
 } else {
   const novaIdade = idadeAtual + tempoDoCrime;
   atualizarIdade(novaIdade);
 }

// danos
const danoCausado = dano[crimeSelecionado];
const resistenciaAtual = getResistencia();
const vidaAtual = getVida();

let novaResistencia = resistenciaAtual; // Inicialize com o valor atual
let novaVida = vidaAtual; // Inicialize com o valor atual

if (danoCausado <= resistenciaAtual) {
  // Se o dano for menor ou igual à resistência, a resistência absorve todo o dano.
  novaResistencia = resistenciaAtual - danoCausado;
} else {
  // Se o dano for maior que a resistência, a resistência é zerada e o excesso de dano é subtraído da vida.
  novaResistencia = 0;
  novaVida = vidaAtual - (danoCausado - resistenciaAtual);
}

atualizarVida(novaVida);
atualizarResistencia(novaResistencia);

});

// Verifique se o dinheiro já está armazenado no armazenamento local
const dinheiroAtual = getDinheiro();
if (dinheiroAtual === 0) {
  localStorage.setItem('dinheiro', '0'); // Defina um valor inicial de dinheiro aqui
}

// Atualize o valor do dinheiro na página
atualizarDinheiro(dinheiroAtual);
