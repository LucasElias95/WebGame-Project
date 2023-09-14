const Fire = document.getElementById('poderFogo');
const custoArmas = {
'soco': 50,
'taco': 80,
'faca': 100,
'taurus': 200,
'glock': 350,
'magnun': 600,
'desert': 1500,
'uzi': 3000,
'mp5': 6000,
'762': 15000,
'ak47': 20000,
'ar15': 35000,
'm16': 50000,
  };

  const forcaArmas = {
    'soco': 1,
    'taco': 3,
    'faca': 5,
    'taurus': 10,
    'glock': 20,
    'magnun': 30,
    'desert': 70,
    'uzi': 140,
    'mp5': 280,
    '762': 500,
    'ak47': 600,
    'ar15': 750,
    'm16': 1000,
      };


      // Função para obter o valor atual da Poder de Fogo do armazenamento local
function getPoderFogo() {
    const fogo = localStorage.getItem('poderFogo');
    return fogo ? parseInt(fogo) : 0;
}

// Função para atualizar o valor da Poder de Fogo na página e no armazenamento local
function atualizarFire(novoValor) {
    localStorage.setItem('poderFogo', novoValor.toString());
    Fire.textContent = novoValor;
}

// Adicione eventos de clique para os botões "Comprar"
document.getElementById('comprarArmaForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const armaSelecionada = document.getElementById('armasSelect').value;
    const custoDaArma = custoArmas[armaSelecionada];
    const dinheiroAtual = getDinheiro();

    if (dinheiroAtual >= custoDaArma) {
        if (!itemJaComprado(armaSelecionada)) {
            // O jogador tem dinheiro suficiente e o item ainda não foi comprado
            const novoDinheiro = dinheiroAtual - custoDaArma;
            atualizarDinheiro(novoDinheiro);

            const FireAtual = getPoderFogo();
            const poderDaArma = forcaArmas[armaSelecionada];
            const novoPoderFogo = FireAtual + poderDaArma;
            atualizarFire(novoPoderFogo);

            marcarItemComoComprado(armaSelecionada); // Marca a arma como comprada

            alert(`Você comprou uma ${armaSelecionada}!`);
        } else {
            // O item já foi comprado
            alert(`Você já possui uma ${armaSelecionada}.`);
        }
    } else {
        // O jogador não possui dinheiro suficiente
        alert("Você não possui dinheiro suficiente para comprar essa arma!");
    }
});



 